import { useEffect, useState } from "react"
import { useSizeScreen } from "./useSizeScreen"

export const ShowSizeScreen = () => {

    const isSmall = useSizeScreen()

    return <>
        {isSmall && <p>Small Screen</p>}
        {!isSmall && <p>Big Screen</p>}
    </>
}

export const ArrBySizeScreen = () => {

    const isSmall = useSizeScreen()

    const arr = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg']

    return <>
        {isSmall &&
            <div>
                <p>{arr[0]}</p>
                <p>{arr[1]}</p>
            </div>
        }
        {!isSmall &&
            arr.map((item, index) => <p key={index}>{item}</p>)
        }
    </>
}