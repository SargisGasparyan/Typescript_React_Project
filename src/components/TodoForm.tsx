import React,{useRef} from 'react'
interface TodoFormInterface{
    onAdd:(title:string)=>void
}

export const TodoForm:React.FC<TodoFormInterface>=(props)=>{
    // const[title,setTitle]=React.useState<string>('')
    const ref = useRef<HTMLInputElement>(null)
    const keyMeth=(e:React.KeyboardEvent)=>{
        if(e.key==="Enter"){
           props.onAdd(ref.current!.value);
             ref.current!.value=""
            
            
        }
    }
    return(
        <div className='input-field'>
            <input 
            // value={title}
            type="text" 
            placeholder="create your text" id="title"
            // onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setTitle(event.target.value)}
            onKeyPress={keyMeth} 
            ref={ref}
            />
            <label htmlFor="title" className="active">create your text</label>
        </div>
    )
}