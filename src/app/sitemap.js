import {MetadataRoute} from 'next'
import { NEXT_PUBLIC_BASE_URL } from '@/constants'
import { fetchRingtones } from '@/services/ringtonesService'

export default async function sitemap() {
    const ringtones = await fetchRingtones()

    const ringtoneEntries = ringtones.map(({id}) => ({
        url: `${NEXT_PUBLIC_BASE_URL}/ringtones/${id}`,
    }))

    
    return [
        {
            url: `${NEXT_PUBLIC_BASE_URL}`
        },
        {
            url: `${NEXT_PUBLIC_BASE_URL}/ringtones`
        },
        ...ringtoneEntries
        

    ]
}