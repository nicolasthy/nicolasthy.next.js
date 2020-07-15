import styled from "@emotion/styled"

import { FONTS } from "../../../../themes/constants"

const languageHighlightColors = {
  html: {
    background: "#00BBF9",
  },
  css: {
    background: "#00F5D4",
  },
  javascript: {
    background: "#FEE020",
  },
  ruby: {
    background: "#F15BB5",
  },
}

export const Container = styled.ul`
  list-style: none;
  padding: 0;
  cursor: pointer;

  > li {
    background: ${({ theme }) => theme.posts.item};
    box-shadow: ${({ theme }) => theme.posts.itemShadow};
    border-radius: 25px;
    margin: 30px 0;
    padding: 30px 30px;
    transition: background 0.2s linear, box-shadow 0.2s linear;

    &:hover {
      background: ${({ theme }) => theme.posts.itemHover};
      box-shadow: ${({ theme }) => theme.posts.itemHoverShadow};
    }

    h3 {
      margin: 0;
      color: ${({ theme }) => theme.posts.itemTitleColor};
      font-weight: 500;
    }

    p {
      &:first-of-type {
        font-size: 12px;
        margin: 0 0 5px;
        opacity: 0.7;
      }

      color: ${({ theme }) => theme.textLight};
      margin: 0;
    }
  }
`

export const TagsList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 15px 0 0 0;
`

export const TagsItem = styled.li`
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  padding: 5px 20px;
  font-family: ${FONTS.sansSerif};
  background: ${({ tag }) => languageHighlightColors[tag].background};
  border-radius: 50px;
  color: #f7f7ff;
`
