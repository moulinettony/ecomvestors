'use server'

import { z } from 'zod'
import { FormSchema } from '@/app/components/form'

/**
 * This is now the primary function. It will send data to the sheet and
 * throw an error if it fails, which the main handler will catch.
 */
async function sendToGoogleSheet(formData: z.infer<typeof FormSchema>) {
    const webAppUrl = process.env.GOOGLE_SHEET_WEB_APP_URL

    // Check if the URL is configured in your .env file
    if (!webAppUrl) {
        console.error('FATAL: GOOGLE_SHEET_WEB_APP_URL is not defined.')
        throw new Error('Server is not configured to accept submissions.')
    }

    // Send the data
    const response = await fetch(webAppUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })

    // If the request was not successful, throw an error
    if (!response.ok) {
        const errorText = await response.text()
        console.error('Failed to send data to Google Sheet. Response:', errorText)
        throw new Error('An error occurred while submitting the form.')
    }

    console.log('Successfully sent data to Google Sheet.')
}

/**
 * The main server action is now a simple wrapper around the Google Sheet function.
 */
export const handleSubmit = async (formData: z.infer<typeof FormSchema>) => {
    console.log('Submitting to Google Sheet for:', formData.fullName)

    try {
        await sendToGoogleSheet(formData)

        // If the function above completes without errors, return success
        return { status: 'success', message: 'Your submission was received!' }
    } catch (error: any) {
        // If sendToGoogleSheet throws an error, catch it here and return an error status
        console.error('Error in handleSubmit:', error)
        return { status: 'error', message: error.message || 'Failed to submit.' }
    }
}
