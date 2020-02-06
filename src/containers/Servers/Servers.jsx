import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/List/List";
import Header from "../../components/Header/Header";
import {
    nameSort,
    distanceSort,
    serversSortByNameAsc,
    serversSortByNameDsc,
    serversSortByDistanceAsc,
    serversSortByDistanceDsc,
    getServers
} from "../../store/actions/servers.actions";
import { handleLogout } from "../../store/actions/auth.actions";

const Servers = () => {
    const dispatch = useDispatch();
    const servers = useSelector(
        state => state.servers.data,
        (a, b) => {
            JSON.stringify(a) === JSON.stringify(b);
        }
    );

    const nameSortAsc = useSelector(state => state.servers.nameSortAsc);
    const distanceSortAsc = useSelector(state => state.servers.distanceSortAsc);
    const headers = [
        {
            name: "NAME",
            key: "name",
            action: () => {
                nameSortAsc ? dispatch(serversSortByNameDsc()) : dispatch(serversSortByNameAsc());

                dispatch(nameSort());
            }
        },
        {
            name: "DISTANCE",
            key: "distance",
            action: () => {
                distanceSortAsc
                    ? dispatch(serversSortByDistanceDsc())
                    : dispatch(serversSortByDistanceAsc());

                dispatch(distanceSort());
            }
        }
    ];

    useEffect(() => {
        dispatch(getServers());
    }, []);

    return (
        <div>
            <Header onLogout={() => dispatch(handleLogout())} />
            <List headers={headers} body={servers || []} />
        </div>
    );
};

export default Servers;
