import { useState, useEffect, useCallback } from 'react'

/**
 * Sends an HTTP request to the specified URL with the given configuration options.
 *
 * @param {string} url - The URL to send the request to.
 * @param {object} config - The configuration options for the request.
 * @return {Promise<any>} A promise that resolves to the response data if the request is successful, or rejects with an error if the request fails.
 * @throws {Error} If the request fails, an error with a message describing the failure is thrown.
 */
const sendHttpRequest = async (url, config) => {

    const response = await fetch(url, config)
    
    const resultData = await response.json()

    if(!response.ok) {  
        throw new Error(resultData.message || 'Request failed!')
    }

    return resultData
}

/**
 * Custom hook for making HTTP requests.
 *
 * @param {string} url - The URL to send the request to.
 * @param {object} config - The configuration options for the request.
 * @return {object} An object containing the response data, loading status, and error.
 */
const useHttp = (url, config) => {

    /*HOOKS */
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    /*FUNCTIONS */
    const sendRequest =  useCallback(async () => {
        setIsLoading(true)
        try {
            const resData = await sendHttpRequest(url, config)
            setData(resData)
        } catch (error) {
            console.log(error);
            setError(error.message || 'Something went wrong!');
        }
        setIsLoading(false)
    },[ url, config ])

    /*EFFECTS */
    useEffect(() => {
        if(config && config.method === 'GET' || !config?.method ||!config) {
            sendRequest();
        }
    },[config, sendRequest])

    /*RENDER */
    return {
        data, 
        isLoading, 
        error,
        sendRequest
    }
}

export default useHttp;