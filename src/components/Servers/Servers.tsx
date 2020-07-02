import React, { useEffect, useState } from 'react'
import makeLayout from '../../styles/layout'
import LogoutButton from '../shared/LogoutButton/LogoutButton'
import logo from '../../../assets/logo/testio_logo_dark.png'
import { requestServerList } from '../../service/auth_service'
import ArrowUp from '../../../assets/icons/arrow-up-solid.svg'
import ArrowDown from '../../../assets/icons/arrow-down-solid.svg'
import serversStyles from './Servers.style'
type SortType = 'asc' | 'desc'
type SortedByType = 'country' | 'distance'
interface Server {
  name: string
  distance: number
}
const getCountryName = (fullName: string) => {
  return fullName.split('#')[0].trim()
}

function Servers() {
  const styles = serversStyles()
  const layout = makeLayout()
  const flexStyle = `${layout.displayFlex} ${layout.justifyBetween} ${layout.alignItemsCenter}`
  const navClasses = `${styles.nav} ${flexStyle}`
  const sortableClass = (selected: boolean) =>
    selected ? 'underline sortable' : 'sortable'
  const [servers, setServers] = useState<Server[]>([])
  const [sortedBy, setSortedBy] = useState<SortedByType>('country')
  const [sortDirectionCountry, setSortDirectionCountry] = useState<SortType>('asc')
  const [sortDirectionDistance, setSortDirectionDistance] = useState<SortType>('asc')

  const nameSort = (a: Server, b: Server) =>
    getCountryName(a.name).localeCompare(getCountryName(b.name))
  const distanceSort = (a: Server, b: Server) => a.distance - b.distance
  const updateSorting = () => {
    if (sortedBy === 'country') {
      setServers(
        [...servers].sort(
          (a, b) =>
            (sortDirectionCountry === 'asc'
              ? nameSort(a, b)
              : nameSort(b, a)) ||
            (sortDirectionDistance === 'asc'
              ? distanceSort(a, b)
              : distanceSort(b, a))
        )
      )
    } else {
      setServers(
        [...servers].sort((a, b) =>
          sortDirectionDistance === 'asc'
            ? distanceSort(a, b)
            : distanceSort(b, a)
        )
      )
    }
  }

  useEffect(() => {
    const fetchServers = async () => {
      const resp = await requestServerList()
      setServers(
        (resp.data as Server[]).sort(
          (a, b) => nameSort(a, b) || distanceSort(a, b)
        )
      )
    }
    fetchServers()
  }, [])

  useEffect(() => {
    updateSorting()
  }, [sortDirectionCountry, sortDirectionDistance, sortedBy])

  return (
    <div>
      <div className={layout.paddingWrapper}>
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
            <div className={flexStyle}>
              <div className="sortContainer">
                {sortedBy === 'country' && (
                  <small className="currentSort">Current Sort:</small>
                )}
                <div className="sortNameContainer">
                  <div className={sortableClass(sortedBy === 'country')}>
                    <span className="mr" onClick={() => setSortedBy('country')}>
                      SERVER
                    </span>
                  </div>
                  {sortedBy === 'country' && (
                    <span className="arrow">
                      {sortDirectionCountry === 'asc' && (
                        <span onClick={() => setSortDirectionCountry('desc')}>
                          <ArrowUp />
                        </span>
                      )}
                      {sortDirectionCountry === 'desc' && (
                        <span onClick={() => setSortDirectionCountry('asc')}>
                          <ArrowDown />
                        </span>
                      )}
                    </span>
                  )}
                </div>
              </div>
              <div className="sortContainer">
                {sortedBy === 'distance' && (
                  <small className="currentSort">Current Sort:</small>
                )}
                <div className="sortNameContainer">
                  <div className={sortableClass(sortedBy === 'distance')}>
                    <span
                      className="mr"
                      onClick={() => setSortedBy('distance')}
                    >
                      DISTANCE
                    </span>
                  </div>
                  <span className="arrow">
                    {sortDirectionDistance === 'asc' && (
                      <span onClick={() => setSortDirectionDistance('desc')}>
                        <ArrowUp />
                      </span>
                    )}
                    {sortDirectionDistance === 'desc' && (
                      <span onClick={() => setSortDirectionDistance('asc')}>
                        <ArrowDown />
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className={styles.list}>
          {!servers.length && <div>Loading...</div>}
          {servers.length > 0 &&
            servers.map((server, index) => (
              <li key={index}>
                <div className={`${layout.paddingWrapper} ${flexStyle}`}>
                  <div>{server.name}</div>
                  <div>{server.distance} km</div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
export default Servers
