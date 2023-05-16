import styled from "styled-components";

const TopPanelStyled = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const InputStyled = styled.input`
  width: 100%;
  max-width: 500px;
  border-radius: 2000px;
  padding: 10px 20px;
  font-size: 18px;
  border: 2px solid #666;
  &:focus {
    border: 2px solid #ef5350;
    outline: 1px solid #ef5350;
  }
`;

interface TopPanelProps {
  handleSearchInputChange: (event: { target: { value: string } }) => void;
}

export default function TopPanel({ handleSearchInputChange }: TopPanelProps) {
  return (
    <TopPanelStyled>
      <InputStyled
        data-testid="search-testid"
        type={"search"}
        placeholder="Search pokemon"
        onChange={handleSearchInputChange}
      />
    </TopPanelStyled>
  );
}
