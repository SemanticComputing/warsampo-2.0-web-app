import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'
import intl from 'react-intl-universal'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/InfoOutlined'

import { ResultTableCell } from '@sampo-ui/components'

class PersonPage extends React.Component {
  constructor (props) {
    super(props)
    const expandedRows = new Set()
    props.data.properties.forEach(prop => {
      if (prop.expandedOnInstancePage) {
        expandedRows.add(prop.id)
      }
    })
    this.state = { expandedRows }
  }

  handleExpandRow = rowId => event => this.updateExpanedRows(rowId)

  handleExpandRowFromChildComponent = rowId => this.updateExpanedRows(rowId)

  updateExpanedRows = rowId => {
    const expandedRows = this.state.expandedRows
    if (expandedRows.has(rowId)) {
      expandedRows.delete(rowId)
    } else {
      expandedRows.add(rowId)
    }
    this.setState({ expandedRows })
  }

  hasExpandableContent = ({ data, config }) => {
    let hasExpandableContent = false
    const isArray = Array.isArray(data)
    if (isArray) {
      hasExpandableContent = true
    }
    if (!isArray &&
        data &&
        data !== '-' &&
        config.valueType === 'string' &&
        config.collapsedMaxWords &&
        data.split(' ').length > config.collapsedMaxWords
    ) {
      hasExpandableContent = true
    }
    return hasExpandableContent
  }

  render = () => {
    const { data, screenSize, perspectiveConfig } = this.props
    const componentConfig = this.props.resultClassConfig?.componentConfig
    const perspectiveID = perspectiveConfig.id

    return (
      <>
        {this.props.fetching &&
          <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
          </div>}
        {data && !this.props.fetching &&
          <Table sx={theme => ({ maxWidth: 1200, width: '100%', [theme.breakpoints.down('lg')]: { tableLayout: 'fixed', overflowWrap: 'break-word' }, borderTop: '1px solid rgba(224, 224, 224, 1);' })} size='small'>
            <TableBody>
              {componentConfig && componentConfig.groups ? componentConfig.groups.map(group => { 
                const group_label = intl.get(`perspectives.${perspectiveID}.groups.${group.id}.label`)

                let skipGroup = false
                if (group.requiredAny) {
                  // any required field must have data or skip
                  skipGroup = true
                  for (const element of group.requiredProperties) {
                    if (data.instanceTableData?.[element]) {
                      skipGroup = false
                    }
                  }
                } else {
                  // all fields must have data or skip
                  for (const element of group.requiredProperties) {
                    if (!data.instanceTableData?.[element]) {
                      skipGroup = true
                    }
                  }
                }
                // return empty string if data is missing for required fields
                if (skipGroup) {
                  return ('')
                }

                return (
                  <Fragment key={group.id}>
                    <TableRow>
                      <TableCell sx={theme => ({ backgroundColor: '#e0e0e0', [theme.breakpoints.down('lg')]: { paddingRight: 0 }, [theme.breakpoints.up('md')]: { minWidth: 280 } })} colSpan={3}>
                        <h3 style={{ marginBottom: '8px', marginTop: '8px' }}>{group_label}</h3>
                      </TableCell>
                    </TableRow>
                    {group.properties.map(propertyId => {
                      const label = intl.get(`perspectives.${perspectiveID}.properties.${propertyId}.label`)
                      const description = intl.get(`perspectives.${perspectiveID}.properties.${propertyId}.description`)
                      const row = this.props.data.properties.filter((p) => p.id === propertyId)[0]
                      const {
                        id, valueType, makeLink, externalLink, sortValues, sortBy, sortByConvertDataTypeTo, numberedList, minWidth, maxHeight,
                        linkAsButton, collapsedMaxWords, showSource, sourceExternalLink, renderAsHTML, HTMLParserTask
                      } = row
                      let { previewImageHeight } = row
                      if (screenSize === 'xs' || screenSize === 'sm') {
                        previewImageHeight = 50
                      }
                      const expanded = this.state.expandedRows.has(row.id)
                      return (
                        <TableRow key={propertyId}>
                          <TableCell sx={theme => ({ [theme.breakpoints.down('lg')]: { paddingRight: 0 }, [theme.breakpoints.up('md')]: { minWidth: 280 } })}>
                            {label}
                            {description &&
                              <Tooltip sx={{ marginTop: '-3px' }} title={description} enterDelay={300}>
                                <IconButton size='large'>
                                  <InfoIcon />
                                </IconButton>
                              </Tooltip>}
                          </TableCell>
                          <TableCell sx={theme => ({ paddingRight: 0, paddingTop: 0, paddingBottom: 0, width: 32, [theme.breakpoints.down('lg')]: { paddingLeft: 0 } })}>
                            {this.hasExpandableContent({ data: data.instanceTableData?.[id], config: row }) &&
                              <IconButton
                                sx={theme => ({ transform: 'rotate(0deg)', marginLeft: 'auto', transition: theme.transitions.create('transform', { duration: theme.transitions.duration.shortest }), ...(expanded && { transform: 'rotate(180deg)' }) })}
                                onClick={this.handleExpandRow(row.id)}
                                aria-expanded={expanded}
                                aria-label='Show more'
                                size='large'
                              >
                                <ExpandMoreIcon />
                              </IconButton>}
                          </TableCell>
                          <ResultTableCell
                            key={id}
                            rowId={row.id}
                            columnId={id}
                            data={data.instanceTableData?.[id]}
                            valueType={valueType}
                            makeLink={makeLink}
                            externalLink={externalLink}
                            sortValues={sortValues}
                            sortBy={sortBy}
                            sortByConvertDataTypeTo={sortByConvertDataTypeTo}
                            numberedList={numberedList}
                            minWidth={minWidth}
                            maxHeight={maxHeight}
                            previewImageHeight={previewImageHeight}
                            container='cell'
                            expanded={expanded}
                            onExpandClick={this.handleExpandRowFromChildComponent}
                            shortenLabel={false}
                            linkAsButton={linkAsButton}
                            collapsedMaxWords={collapsedMaxWords}
                            showSource={showSource}
                            sourceExternalLink={sourceExternalLink}
                            renderAsHTML={renderAsHTML}
                            HTMLParserTask={HTMLParserTask}
                            referencedTerm={data.instanceTableData?.referencedTerm}
                          />
                        </TableRow>
                      )
                    })}
                  </Fragment>
              )
              }) : ''}
            </TableBody>
          </Table>}
      </>
    )
  }
}

PersonPage.propTypes = {
  resultClass: PropTypes.string.isRequired,
  data: PropTypes.object
}

export default PersonPage