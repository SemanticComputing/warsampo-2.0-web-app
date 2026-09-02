import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import intl from 'react-intl-universal'

class ExternalSiteLink extends React.Component {
  constructor (props) {
    super(props)
  }

  renderSpinner () {
    if (this.props.resultUpdateID === 0) {
      const spinnerContainerStyle = {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }
      return (
        <div style={spinnerContainerStyle}>
          <CircularProgress />
        </div>
      )
    }
    return null
  }

  componentDidMount = () => {
    this.props.fetchResults({
      perspectiveID: this.props.perspectiveConfig.id,
      resultClass: this.props.resultClass,
      facetClass: this.props.facetClass,
      uri: this.props.uri
    })
  }

  render = () => {
    const { data, properties, screenSize, perspectiveConfig } = this.props
    const openInNewTab = intl.get(`perspectives.${perspectiveConfig.id}.externalSite.openInNewTab`)

    return (
      <>
        {this.renderSpinner()}
        {data?.results ?
          <Box sx={{ m: 2, height: 'inherit', minHeight: '50cqh', fontFamily: 'Roboto', textAlign: 'center',  alignContent: 'center' }}>
            <a href={data?.results[0]?.url} target="_blank" rel="noopener noreferrer">
                <Button variant='contained' color='primary'>
                    {openInNewTab ? openInNewTab : 'Open page in a new tab'}
                </Button>
            </a>
          </Box>
          :
          null}
      </>
    )
  }
}

ExternalSiteLink.propTypes = {
  resultClass: PropTypes.string.isRequired,
  data: PropTypes.object,
  properties: PropTypes.array.isRequired
}

export default ExternalSiteLink