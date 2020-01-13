import styled from "@emotion/styled";

const StyledPostsList = styled.ul`
  list-style: none;
  padding: 0;
  cursor: pointer;

  li {
    background: ${({ theme }) => theme.posts.item};
    box-shadow: ${({ theme }) => theme.posts.itemShadow};
    border-radius: 4px;
    margin: 10px 0;
    padding: 12px 25px;
    transition: background 0.2s linear, box-shadow 0.2s linear;

    &:hover {
      background: ${({ theme }) => theme.posts.itemHover};
      box-shadow: ${({ theme }) => theme.posts.itemHoverShadow};
    }

    h3 {
      margin: 0 0 10px;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      margin: 0;
    }
  }
`;

export { StyledPostsList };
