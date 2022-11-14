import React from 'react'
import { Box } from "@mui/material"
import Header from '../../components/Header'

const Dashboard = () => {
  return (
    <Box display="flex" justifyContent="spece-between" alignItems="center" p={2}>
      <Header title="DASHBOARD" subtitle="Welcome to dashboard" />
    </Box>
  )
}

export default Dashboard