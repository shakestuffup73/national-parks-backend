import axios from 'axios'

const NPS_BASE_URL=process.env.NPS_BASE_URL
const NPS_API_KEY=process.env.NPS_API_KEY

async function getParksByState(req, res) {
  console.log('this is banananana')
  try {
    const path=`${NPS_BASE_URL}?stateCode=${req.params.stateCode}&api_key=${NPS_API_KEY}`
    const response = await axios.get(path)
    console.log('this is response', response.data.data)
    res.json(response.data.data)
  } catch (error) {
    console.log(error)
  }
}

export { getParksByState }