import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address provided." },
        { status: 400 }
      )
    }

    // Simulate database latency
    await new Promise((resolve) => setTimeout(resolve, 800))

    // In a real application, you would save this to a database like PostgreSQL or MongoDB
    console.log(`[Database Mock] New subscriber added: ${email}`)

    return NextResponse.json(
      { message: "Successfully subscribed to the m.co newsletter!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    )
  }
}
