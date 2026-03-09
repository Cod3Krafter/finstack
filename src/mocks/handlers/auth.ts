import { http, HttpResponse } from "msw";

export const authHandlers = [
  http.post("/api/auth/login", async ({ request }) => {
    const { email, password } = await request.json() as any;

    if (email === "moses@finstack.com" && password === "password123") {
      return HttpResponse.json({
        token: "mock_jwt_token_xyz",
        user: {
          id: "usr_001",
          firstName: "Moses",
          lastName: "Adesina",
          email,
          phone: "+2348108765847",
          accountNumber: "8023456789",
          bvn: "22*******01",
        },
      });
    }

    return HttpResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }),
];