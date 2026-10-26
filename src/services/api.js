
const API_BASE_URL = 'http://localhost:8081/api'

// Get services
export async function getServices() {
  const response = await fetch(`${API_BASE_URL}/services`)

  if (!response.ok) {
    throw new Error('Failed to fetch services')
  }

  return response.json()
}

// Get incidents  
export async function getIncidents() {
  const response = await fetch(`${API_BASE_URL}/incidents`)

  if (!response.ok) {
    throw new Error('Failed to fetch incidents')
  }

  return response.json()
}

// Get dashboard summary
export async function getDashboardSummary() {
  const response = await fetch(`${API_BASE_URL}/dashboard/summary`)

  if (!response.ok) {
    throw new Error('Failed to fetch dashboard summary')
  }

  return response.json()
}
