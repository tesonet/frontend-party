import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createUseStyles } from 'react-jss'
import makeLayout from '../../styles/layout'
import LogoutButton from '../shared/LogoutButton/LogoutButton'
import logo from '../../../assets/logo/testio_logo_dark.png'
import { requestServerList } from '../../service/auth_service'
import ArrowUp from '../../../assets/icons/arrow-up-solid.svg'
import ArrowDown from '../../../assets/icons/arrow-down-solid.svg'
type SortType = 'asc' | 'desc'
type SortedByType = 'country' | 'distance'
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
    '& .sortable': {
      cursor: 'pointer',
    },
    '& .underline': {
      textDecoration: 'underline',
    },
    '& .sortContainer': {
      position: 'relative',
      '& .sortNameContainer': {
        display: 'flex',
        '& .arrow': {
          cursor: 'pointer',

          '& svg': {
            height: 16,
            width: 16,
          },
        },
      },
      '& .currentSort': {
        position: 'absolute',
        top: -16,
        left: 0,
        width: 80,
      },
    },
  },
  sorting: {},
})

function Servers() {
  const styles = makeStyles()
  const layout = makeLayout()
  const navClasses = `${styles.nav} ${layout.displayFlex} ${layout.justifyBetween} ${layout.alignItemsCenter}`
  const [servers, setServers] = useState([])
  const [sortedBy, setSortedBy] = useState('country')
  const [sortDirectionCountry, setSortDirectionCountry] = useState('asc')
  const [sortDirectionDistance, setSortDirectionDistance] = useState('asc')

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
    if (sortedBy === 'country') {
      handleSortDirectionCountry(sortDirectionCountry as SortType)
    }

    if (sortedBy === 'distance') {
      handleSortDirectionDistance(sortDirectionDistance as SortType)
    }
  }, [sortedBy])

  const nameSort = (a, b) =>
    getCountryName(a.name).localeCompare(getCountryName(b.name))

  const distanceSort = (a: Server, b: Server) => a.distance - b.distance

  const handleSortDirectionCountry = (type: SortType) => {
    if (type === 'asc') {
      setServers(
        [...servers].sort(
          (a, b) =>
            nameSort(a, b) ||
            (sortDirectionDistance === 'asc'
              ? distanceSort(a, b)
              : distanceSort(b, a))
        )
      )
    }

    if (type === 'desc') {
      setServers(
        [...servers].sort(
          (a, b) =>
            nameSort(b, a) ||
            (sortDirectionDistance === 'asc'
              ? distanceSort(a, b)
              : distanceSort(b, a))
        )
      )
    }
    setSortDirectionCountry(type)
  }

  const handleSortDirectionDistance = (type: SortType) => {
    if (sortedBy === 'country') {
      if (type === 'asc') {
        setServers(
          [...servers].sort(
            (a, b) =>
              (sortDirectionCountry === 'asc'
                ? nameSort(a, b)
                : nameSort(b, a)) || distanceSort(a, b)
          )
        )
      }

      if (type === 'desc') {
        setServers(
          [...servers].sort(
            (a, b) =>
              (sortDirectionCountry === 'asc'
                ? nameSort(a, b)
                : nameSort(b, a)) || distanceSort(b, a)
          )
        )
      }
    } else {
      if (type === 'asc') {
        setServers([...servers].sort((a, b) => distanceSort(a, b)))
      }
      if (type === 'desc') {
        setServers([...servers].sort((a, b) => distanceSort(b, a)))
      }
    }
    setSortDirectionDistance(type)
  }

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
            <div
              className={`${layout.displayFlex} ${layout.justifyBetween} ${layout.alignItemsCenter}`}
            >
              <div className="sortContainer">
                {sortedBy === 'country' && (
                  <small className="currentSort">Current Sort:</small>
                )}
                <div className="sortNameContainer">
                  <div
                    className={
                      sortedBy === 'country' ? 'sortable underline' : 'sortable'
                    }
                  >
                    <span className="mr" onClick={() => setSortedBy('country')}>
                      SERVER
                    </span>
                  </div>
                  {sortedBy === 'country' && (
                    <span className="arrow">
                      {sortDirectionCountry === 'asc' && (
                        <span
                          onClick={() => handleSortDirectionCountry('desc')}
                        >
                          <ArrowUp />
                        </span>
                      )}
                      {sortDirectionCountry === 'desc' && (
                        <span
                          onClick={() => handleSortDirectionCountry('asc')}
                        >
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
                  <div
                    className={
                      sortedBy === 'distance'
                        ? 'sortable underline'
                        : 'sortable'
                    }
                  >
                    <span
                      className="mr"
                      onClick={() => setSortedBy('distance')}
                    >
                      DISTANCE
                    </span>
                  </div>
                  <span className="arrow">
                    {sortDirectionDistance === 'asc' && (
                      <span
                        onClick={() => handleSortDirectionDistance('desc')}
                      >
                        <ArrowUp />
                      </span>
                    )}
                    {sortDirectionDistance === 'desc' && (
                      <span
                        onClick={() => handleSortDirectionDistance('asc')}
                      >
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
          {servers.length &&
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
      </div>
    </div>
  )
}
export default Servers
