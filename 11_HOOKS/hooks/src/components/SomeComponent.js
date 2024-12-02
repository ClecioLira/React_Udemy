import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const SomeComponent = forwardRef((props, ref) => {
    const localInputRef = useRef()

    useImperativeHandle(ref, () => {
        return {
            validador: () => {
                if(localInputRef.current.value.length > 3) {
                    console.log("coloque apenas 3 caracteres")
                    localInputRef.current.value = ""
                }
            }
        }
    })

    return (  
        <div>
            <h2>SomeComponent</h2>
            <input type='text' ref={localInputRef}/>
        </div>
    )

})

export default SomeComponent