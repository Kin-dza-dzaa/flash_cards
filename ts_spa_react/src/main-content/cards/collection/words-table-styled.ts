import styled from "@emotion/styled";
import { DeleteFilled, EditFilled, SendOutlined } from '@ant-design/icons';

export const StyledDelete = styled(DeleteFilled)`
    margin-top: 5px;
    cursor: pointer;
    transform: scale(1.3);
    color: rgba(126, 126, 126, 1);
    :hover {
        color: rgba(23, 125, 220, 1);
    }
    :active {
        color: rgba(44, 155, 255, 1);
    }
`

export const StyledEdit = styled(EditFilled)`
    cursor: pointer;
    color: rgba(126, 126, 126, 1);
    :hover {
        color: rgba(23, 125, 220, 1);
    }
`

export const StyledSend = styled(SendOutlined)`
    cursor: pointer;
    color: rgba(126, 126, 126, 1);
    :hover {
        color: rgba(23, 125, 220, 1);
    }
`