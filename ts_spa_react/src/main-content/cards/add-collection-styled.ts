import styled from "@emotion/styled";
import { PlusCircleOutlined, DeleteFilled } from '@ant-design/icons';

export const StyledPlus = styled(PlusCircleOutlined)`
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