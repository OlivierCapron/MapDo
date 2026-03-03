import styled from "styled-components";

const SuggestionBox = styled.div`

  display: block;

  flex: 1;
  padding: 10px;
  margin: 15px 0px 15px 0px;

  border-radius: 10px;
  border: 2px solid #9b9b9b;
  background: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #333;
  transition: border 0.2s ease, box-shadow 0.2s ease;
  &:hover {
     background: #f3f5f7;
  }`

function Suggestion({ villeSuggeree,onSelect }) {
    return (
    <SuggestionBox
     
      onClick={() => onSelect?.(villeSuggeree)}
      role="button"
      tabIndex={0}
    >
      {villeSuggeree.display_name}
    </SuggestionBox>
  );
}

export default Suggestion;