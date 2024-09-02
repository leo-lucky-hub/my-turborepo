'use client';

import { useEffect, useState } from "react";

interface DataItem {
    id: number;
}

export const useGetList = (url: string) => {
    console.log(`Client Env: ${process.env.NEXT_PUBLIC_CLIENT_NAME}`);
    const [data, setData] = useState<DataItem[] | null>(null);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result: DataItem[] = await response.json();
                setData(result);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setData(null);
            }
        };
        fetchData();
    }, [url]);

    return { data };
};
