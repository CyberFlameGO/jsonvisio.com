import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { ConditionalWrapper, CustomNodeProps } from "src/components/CustomNode";
import useConfig from "src/hooks/store/useConfig";
import styled from "styled-components";
import * as Styled from "./styles";

const StyledExpand = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  padding: 0;
  color: ${({ theme }) => theme.TEXT_NORMAL};
  background: rgba(0, 0, 0, 0.1);
  min-height: 0;
  height: 100%;
  width: 30px;
  border-radius: 0;
  border-left: 1px solid ${({ theme }) => theme.BACKGROUND_MODIFIER_ACCENT};
`;

const TextNode: React.FC<CustomNodeProps<string>> = ({
  width,
  height,
  value,
  isParent = false,
  x,
  y,
}) => {
  const performance = useConfig((state) => state.settings.performance);

  return (
    <Styled.StyledForeignObject width={width} height={height} x={0} y={0}>
      <ConditionalWrapper condition={performance}>
        <Styled.StyledText width={width} height={height}>
          <Styled.StyledKey
            data-x={x}
            data-y={y}
            data-key={value}
            parent={isParent}
          >
            {isParent && (
              <StyledExpand>
                <BiChevronRight size={18} />
              </StyledExpand>
            )}
            {value}
          </Styled.StyledKey>
        </Styled.StyledText>
      </ConditionalWrapper>
    </Styled.StyledForeignObject>
  );
};

export default TextNode;
