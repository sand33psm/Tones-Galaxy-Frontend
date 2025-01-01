import {MetadataRoute} from 'next'
import { NEXT_PUBLIC_BASE_URL } from '@/constants'

export default async function sitemap() {
    
    return [
        {
            url: `${NEXT_PUBLIC_BASE_URL}/ringtones`
        }
    ]
}