import {useState} from 'react';

export default function Form() {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Form submitted with name: ${name}`);
        console.log(name);

    }
    return (
        <form method="post" onSubmit={handleSubmit}>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            
            />
        </form>
    )
}
