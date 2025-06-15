import Challenge_1 from './Challenge_1'

const Challenge_2 = ({ children, addstyle = {} }) => {
    return (
        <Challenge_1 addstyle={addstyle}>
            {children}
        </Challenge_1>
    )
}

export default Challenge_2