import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/system'

const Dashboard = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Header title="DASHBOARD" subtitle="Bienvenidos al Panel de Control" />
    </Box>
  )
}

export default Dashboard