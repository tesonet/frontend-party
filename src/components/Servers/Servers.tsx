import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createUseStyles } from 'react-jss'
import makeLayout from '../../styles/layout'
import LogoutButton from '../shared/LogoutButton/LogoutButton'
import logo from '../../../assets/logo/testio_logo_dark.png'
import { requestServerList } from '../../service/auth_service'
interface Server {
  name: string
  distance: number
}
const getCountryName = (fullName: string) => {
  return fullName.split('#')[0].trim()
}
const makeStyles = createUseStyles({
  nav: {
    padding: '46px 0',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& li': {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 300,
      color: '#666666',
      padding: '24px 0',
      borderBottom: '1px solid #E7E7E7',
    },
  },
  logo: {
    '& img': {
      height: 28,
    },
  },
  header: {
    fontSize: 14,
    color: '#999999',
    backgroundColor: '#F5F5F5',
    padding: '25px 0',
    borderBottom: '1px solid #E7E7E7',
    borderTop: '1px solid #E7E7E7',
  },
})

function Servers(props) {
  const styles = makeStyles()
  const layout = makeLayout()
  const navClasses = `${styles.nav} ${layout.displayFlex} ${layout.justifyBetween} ${layout.alignItemsCenter}`
  const [servers, setServers] = useState([])
  // let servers: Server[] = []
  useEffect(() => {
    const fetchServers = async () => {
      const resp = await requestServerList()
      setServers(resp.data)
    }
    fetchServers()
  }, [])
  // const serversExist = servers && servers.length
  // if (serversExist) {
  //   servers = servers.sort(
  //     (a, b) =>
  //       getCountryName(a.name).localeCompare(getCountryName(b.name)) ||
  //       a.distance - b.distance
  //   )
  // }
  return (
    <div>
      {JSON.stringify(servers)}
      {/* <div className={layout.paddingWrapper}>
        <div className={navClasses}>
          <div className={styles.logo}>
            <img src={logo} alt="testio logo" />
          </div>
          <div>
            <LogoutButton />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.header}>
          <div className={layout.paddingWrapper}>
            <div className={`${layout.displayFlex} ${layout.justifyBetween}`}>
              <div>SERVER</div>
              <div>DISTANCE</div>
            </div>
          </div>
        </div>
        <ul className={styles.list}>
          {serversExist &&
            servers.map((server, index) => (
              <li key={index}>
                <div
                  className={`${layout.paddingWrapper} ${layout.displayFlex} ${layout.justifyBetween}`}
                >
                  <div>{server.name}</div>
                  <div>{server.distance} km</div>
                </div>
              </li>
            ))}
        </ul>
      </div> */}
    </div>
  )
}
export default Servers
