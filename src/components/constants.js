import dayjs from 'dayjs'
export const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/"

export const days = ['D','S', 'T', 'Q', 'Q', 'S', 'S']

const now = dayjs()
require('dayjs/locale/pt-br')
export const date = now.date()
export const month = now.locale('pt-br').month() + 1


export function formatDay() {
    const dia = (now.locale('pt-br').format("dddd"))
    
    const firstLetter = dia[0]
    
    return `${dia[0].toUpperCase()}${dia.slice(1)}`
}   


