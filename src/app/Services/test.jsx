Import React, {useState} from “react”
	export default function Parant() {
		const [user, setUser] = useState({name: “John”, age: 25})

        const handleIncreaseAge = () => {
            setUser({...name, age: age + 1})
        }
		
		return (
			<div>
			<h2>name: {user.name}</h2>
			<h2>age: {user.age}</h2>
			<button onClick={handleIncreaseAge}>Increase Age</button>
			</div>
		)
	}