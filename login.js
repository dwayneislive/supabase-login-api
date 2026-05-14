import * as React from "react"

export default function Login() {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [message, setMessage] = React.useState("")

    async function handleSignup() {
        if (!window.supabase) {
            setMessage("Supabase not loaded")
            return
        }

        const supabase = window.supabase.createClient(
            "https://afdgorxpsdtcwdiixdvs.supabase.co",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmZGdvcnhwc2R0Y3dkaWl4ZHZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0ODgzMTAsImV4cCI6MjA5NDA2NDMxMH0.NvHHBDkmMSGU5XOlf09jAsCS-g8FMqhZO-sRdhD0i4U"
        )

        const { error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            setMessage(error.message)
        } else {
            setMessage("Account created!")
        }
    }

    async function handleLogin() {
        if (!window.supabase) {
            setMessage("Supabase not loaded")
            return
        }

        const supabase = window.supabase.createClient(
            "https://afdgorxpsdtcwdiixdvs.supabase.co",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmZGdvcnhwc2R0Y3dkaWl4ZHZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0ODgzMTAsImV4cCI6MjA5NDA2NDMxMH0.NvHHBDkmMSGU5XOlf09jAsCS-g8FMqhZO-sRdhD0i4U"
        )

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setMessage(error.message)
        } else {
            window.location.href = "/welcome"
        }
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: 20,
                maxWidth: 300,
            }}
        >
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>

            <button onClick={handleSignup}>Sign Up</button>

            <p>{message}</p>
        </div>
    )
}
