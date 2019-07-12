import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { screens } from '../../utils/helpers';
import { Sizes } from '../../common/constants';
import Card from '../common/Card';
import Page from '../common/Page';

const Text = styled.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;

    @media ${screens[Sizes.XS]} {
        font-size: 15px;
        margin-bottom: 15px;
    }
`;

const NotFoundPage = () => (
    <Page>
        <Card>
            <Text>
                Sorry, but this sub-page does not exist yet{' '}
                <span role="img" aria-label="crying">
                    😭
                </span>
                <br />
                We are surely working on it, but for now, lets go back! Shall we?{' '}
                <span role="img" aria-label="handshake">
                    🤝
                </span>
            </Text>
            <Link to="/">
                <Button>Back to Safety</Button>
            </Link>
        </Card>
    </Page>
);

export default NotFoundPage;
