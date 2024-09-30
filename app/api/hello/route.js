import { NextResponse } from "next/server";
import { Groq } from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_APIKEY, // Load the API key from environment variables
});

export const GET = async () => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            'Buatkan kata lucu yang terdiri dari dua kata, seperti :\n1. "Dokter Tikus."\n2. "Rambut Pizza."\n3. "Mobil Sabun."\n4. "Bola Hujan."\n5. "Kucing Terbang."\n6. "Gajah Terbang."\n7. "Coklat Diet."\n8. "Monyet Nyanyi."\n9. "Jagung Mandi."\n10. "Bantal Terbang."\n11. "Singa Fashion."\n12. "Telepon Jalan."\n13. "Gitar Jeruk."\n14. "Panci Nyanyi."\n15. "Telur Terbang."\n16. "Burung Kebun."\n17. "Kuda Salju."\n18. "Kipas Tidur."\n19. "Kompor Lalat."\n20. "Gajah Duduk"\nbuat dengan kombinasi yang terdengar aneh, unik, dan menggemaskan. Buatkan sebanyak satu saja dengan format "{kata pertama} {kata kedua}".',
        },
      ],
      model: "llama-3.1-70b-versatile",
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
    });

    // Kumpulkan semua chunk teks dari stream
    const fullResponse = chatCompletion.choices[0].message.content;

    // Mengembalikan hasil sebagai JSON
    return NextResponse.json({ result: fullResponse });
  } catch (error) {
    // Menangani error dan mengembalikan respons error
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};
