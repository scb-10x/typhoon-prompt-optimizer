// Define the markdown content as a string
const guidelinesMarkdownEn = `## The Art of Prompt Engineering for Typhoon: A Comprehensive Guide

Prompt engineering is both an art and a science. When working with Typhoon, our Thai large language model, the right prompting techniques can dramatically improve the quality of outputs. This guide will walk you through essential strategies, with practical examples to help you get the most out of Typhoon.

### 1. Be Clear and Concise

Your prompt should be easy to understand while providing sufficient context for the model to generate relevant output. Avoid unnecessary jargon or overly technical terms.

**Example:**

\`\`\`
❌ "Elucidate the variegated methodologies inherent in sustainable agricultural practices in Thailand's northeastern region."

✅ "Explain the different sustainable farming methods used in northeastern Thailand."
\`\`\`

### 2. Use Specific Examples

Providing concrete examples helps the model understand your expectations better.

**Example:**

\`\`\`
❌ "Write a Thai folk tale."

✅ "Write a Thai folk tale about a clever rabbit who outsmarts a crocodile to cross a river. Include elements of traditional Thai storytelling such as moral lessons and natural settings."
\`\`\`

### 3. Vary Your Prompts for Creative Responses

Different approaches to prompting can yield more diverse and creative outputs.

**Example:**

\`\`\`
Prompt 1: "Write a poem about Bangkok in the rainy season."
Prompt 2: "Imagine you're a street vendor in Bangkok during monsoon season. Describe what you see, hear, and feel."
Prompt 3: "ฝนตกในกรุงเทพฯ ทำให้คุณรู้สึกอย่างไร? เขียนบทกวีสั้นๆ เกี่ยวกับความรู้สึกนี้"
\`\`\`

### 4. Try and Refine

Start with a simple prompt, then iteratively add constraints or information to get closer to your desired result.

**Example:**

\`\`\`
Initial prompt: "Summarize Thailand's economic outlook."
Refined prompt: "Summarize Thailand's economic outlook for 2025, focusing on tourism recovery and technology sectors."
Further refined: "Summarize Thailand's economic outlook for 2025, focusing on tourism recovery and technology sectors. Include key statistics and present in 5 bullet points."
\`\`\`

### 5. Avoid Overly Complex Prompts

Complexity can reduce model performance rather than improve it.

**Example:**

\`\`\`
❌ "Analyze the multifaceted interplay between Thailand's political landscape, economic determinants, sociocultural factors, and geographical considerations to synthesize a comprehensive evaluation of potential investment opportunities in the eastern economic corridor while factoring in historical precedents, regulatory frameworks, and future projections according to various economic models."

✅ "What are the main investment opportunities in Thailand's eastern economic corridor? Consider political, economic, and regulatory factors."
\`\`\`

### 6. Structure Examples Wisely

Add one or two examples when the model isn't following your instructions, but don't overdo it.

**Example:**

\`\`\`
"Translate the following English sentences to formal Thai.

Example:
English: I would like to schedule a meeting with you next week.
Thai: ผมขอนัดประชุมกับคุณในสัปดาห์หน้า

Now translate: The committee has decided to postpone the event until further notice."
\`\`\`

### 7. Use English for Instructions, Thai for Content

Prompt in English, but include documents or user questions in Thai for better model understanding.

**Example:**

\`\`\`
"Summarize the main points of this Thai news article:

[ข่าวเศรษฐกิจไทย: ธนาคารแห่งประเทศไทยประกาศมาตรการใหม่เพื่อกระตุ้นเศรษฐกิจ...]"
\`\`\`

### 8. Choose Language Based on Priority

If natural Thai language is more important than precise instruction following, prompt in Thai.

**Example:**

\`\`\`
❌ "Write a casual conversation between two Thai teenagers discussing their favorite music."

✅ "เขียนบทสนทนาระหว่างวัยรุ่นไทยสองคนที่กำลังคุยกันเรื่องเพลงที่ชอบ ใช้ภาษาวัยรุ่นที่เป็นธรรมชาติ"
\`\`\`

### 9. Limit Few-Shot Examples

Modern LLMs often perform better with clear instructions than with many examples. If needed, use no more than 5 few-shot examples.

**Example:**

\`\`\`
"Classify these Thai restaurant reviews as positive, negative, or neutral.

Example 1:
Review: อาหารอร่อยมาก บริการเยี่ยม
Classification: Positive

Example 2:
Review: รสชาติพอใช้ได้ แต่ราคาแพงไปหน่อย
Classification: Neutral

Now classify: รอนานมาก อาหารก็ไม่อร่อย ไม่แนะนำเลย"
\`\`\`

### 10. Be Direct About Outputs

If you only want JSON, say so explicitly. This prevents the model from showing its reasoning process.

**Example:**

\`\`\`
"Convert this Thai restaurant information to JSON format. Return ONLY valid JSON without any explanations or additional text:

ชื่อร้าน: บ้านสวน
ที่อยู่: สุขุมวิท 55
เวลาเปิด: 11:00 - 22:00
ประเภทอาหาร: อาหารไทย, อาหารอีสาน"
\`\`\`

### 11. Use Code for Outputs Extraction

It's often easier to extract model outputs with code than to perfect your prompt.

**Example:**

\`\`\`js
const extractCodeBlock = (text) => {
  // Regular expression to match code blocks with their fences
  const codeBlockRegex = /\`\`\`(?:[a-zA-Z0-9]+)?([\s\S]*?)\`\`\`/gm;
  
  // Array to store all extracted code blocks
  const extractedBlocks = [];
  
  // Find all code blocks and extract their content
  let match;
  while ((match = codeBlockRegex.exec(text)) !== null) {
    // match[1] contains the content between the code fences
    extractedBlocks.push(match[1].trim());
  }
  
  // Return all extracted code blocks
  return extractedBlocks;
}
\`\`\`

### 12. Use Reasoning Models for Complex Tasks

When your task requires multiple-step thinking or editing, use a reasoning-focused model.

**Example:**

\`\`\`
"I need to create a comprehensive marketing strategy for a new Thai street food chain targeting tourists and locals. Please think step by step about market research, positioning, pricing, promotion channels, and cultural considerations."
\`\`\`

### 13. Implement Feedback Loops

Many issues can be solved through iterative feedback and refinement.

**Example:**

\`\`\`
Initial process: Input → LLM → Output
Refined process: JSON.parse(output) → error → LLM → Refined output

"Your previous response had a JSON parsing error. Please fix the following issue and return only valid JSON: Missing comma after the 'name' field."
\`\`\`

### 14. Break Down Complex Tasks

For challenging tasks, use a divide-and-conquer approach.

**Example:**
Instead of:

\`\`\`
❌ "Please create a presentation from this market research data." [large text dump]
\`\`\`

Try:

\`\`\`
✅ Step 1: "Please identify the 5 key insights from this market research data." [data]
✅ Step 2: "For insight #1, create a slide with a compelling headline, 3 supporting points, and a visualization suggestion."
✅ Step 3: "Organize these 5 slides into a coherent narrative that flows logically."
\`\`\`

### 15. Use Explicit Instructions

Be specific about style, format, and restrictions.

**Example for Stylization:**

\`\`\`
"Explain blockchain technology in language a 5-year-old Thai child would understand."
\`\`\`

**Example for Formatting:**

\`\`\`
"Answer this question about Thai history and provide citations as numbers [1], [2], etc. Include the full references at the end of your response."
\`\`\`

**Example for Restrictions:**

\`\`\`
"Answer this healthcare question based only on information in the attached documents. If the documents don't contain relevant information, politely decline to answer."
\`\`\`

### 16. Leverage External Data Sources

Use RAG (Retrieval-Augmented Generation) or web search capabilities to reduce hallucinations.

**Example:**

\`\`\`
"Using the attached Thai medical guidelines, answer the following question about diabetes treatment protocols. Only include information that is explicitly mentioned in the documents."
\`\`\`

By applying these techniques, you'll be able to craft more effective prompts for Typhoon and achieve better results for your specific use cases. Remember that prompt engineering is iterative – don't be afraid to experiment and refine your approach based on the outputs you receive.`;

// Define Thai version
const guidelinesMarkdownTh = `# ศิลปะของ Prompt Engineering สำหรับ Typhoon: คู่มือฉบับสมบูรณ์

Prompt engineering เป็นทั้งศาสตร์และศิลป์ เมื่อทำงานกับ Typhoon ซึ่งเป็นโมเดลภาษาไทยขนาดใหญ่ของเรา เทคนิคการเขียนคำสั่ง (prompt) ที่เหมาะสมจะช่วยเพิ่มคุณภาพของผลลัพธ์ได้อย่างมาก คู่มือนี้จะพาคุณไปเรียนรู้กลยุทธ์ที่สำคัญ พร้อมตัวอย่างที่นำไปใช้ได้จริงเพื่อช่วยให้คุณใช้งาน Typhoon ได้อย่างเต็มประสิทธิภาพ

## 1. ใช้คำสั่งที่ชัดเจนและกระชับ

คำสั่งของคุณควรเข้าใจง่ายและให้ข้อมูลที่เพียงพอสำหรับโมเดลในการสร้างผลลัพธ์ที่ตรงประเด็น หลีกเลี่ยงศัพท์เฉพาะหรือคำที่เป็นเทคนิคมากเกินไป

**Example:**
\`\`\`
❌ "Elucidate the variegated methodologies inherent in sustainable agricultural practices in Thailand's northeastern region."

✅ "Explain the different sustainable farming methods used in northeastern Thailand."
\`\`\`

## 2. ยกตัวอย่างที่เฉพาะเจาะจง

การให้ตัวอย่างที่ชัดเจนจะช่วยให้โมเดลเข้าใจความคาดหวังของคุณได้ดีขึ้น

**Example:**
\`\`\`
❌ "Write a Thai folk tale."

✅ "Write a Thai folk tale about a clever rabbit who outsmarts a crocodile to cross a river. Include elements of traditional Thai storytelling such as moral lessons and natural settings."
\`\`\`

## 3. ปรับเปลี่ยนคำสั่งเพื่อผลลัพธ์ที่สร้างสรรค์

การใช้วิธีการเขียนคำสั่งที่หลากหลายสามารถทำให้ได้ผลลัพธ์ที่แตกต่างและสร้างสรรค์มากขึ้น

**Example:**
\`\`\`
Prompt 1: "Write a poem about Bangkok in the rainy season."
Prompt 2: "Imagine you're a street vendor in Bangkok during monsoon season. Describe what you see, hear, and feel."
Prompt 3: "ฝนตกในกรุงเทพฯ ทำให้คุณรู้สึกอย่างไร? เขียนบทกวีสั้นๆ เกี่ยวกับความรู้สึกนี้"
\`\`\`

## 4. ลองและปรับปรุง

เริ่มต้นด้วยคำสั่งง่ายๆ แล้วค่อยๆ เพิ่มเงื่อนไขหรือข้อมูลเพื่อให้ได้ผลลัพธ์ที่ใกล้เคียงกับสิ่งที่คุณต้องการ

**Example:**
\`\`\`
Initial prompt: "Summarize Thailand's economic outlook."
Refined prompt: "Summarize Thailand's economic outlook for 2025, focusing on tourism recovery and technology sectors."
Further refined: "Summarize Thailand's economic outlook for 2025, focusing on tourism recovery and technology sectors. Include key statistics and present in 5 bullet points."
\`\`\`

## 5. หลีกเลี่ยงคำสั่งที่ซับซ้อนเกินไป

ความซับซ้อนอาจลดประสิทธิภาพของโมเดลแทนที่จะปรับปรุงให้ดีขึ้น

**Example:**
\`\`\`
❌ "Analyze the multifaceted interplay between Thailand's political landscape, economic determinants, sociocultural factors, and geographical considerations to synthesize a comprehensive evaluation of potential investment opportunities in the eastern economic corridor while factoring in historical precedents, regulatory frameworks, and future projections according to various economic models."

✅ "What are the main investment opportunities in Thailand's eastern economic corridor? Consider political, economic, and regulatory factors."
\`\`\`

## 6. จัดโครงสร้างตัวอย่างอย่างชาญฉลาด

เพิ่มตัวอย่างหนึ่งหรือสองตัวอย่างเมื่อโมเดลไม่ทำตามคำสั่งของคุณ แต่อย่าใส่มากเกินไป

**Example:**
\`\`\`
"Translate the following English sentences to formal Thai. 

Example:
English: I would like to schedule a meeting with you next week.
Thai: ผมขอนัดประชุมกับคุณในสัปดาห์หน้า

Now translate: The committee has decided to postpone the event until further notice."
\`\`\`

## 7. ใช้ภาษาอังกฤษสำหรับคำสั่ง ภาษาไทยสำหรับเนื้อหา

เขียนคำสั่งเป็นภาษาอังกฤษ แต่รวมเอกสารหรือคำถามของผู้ใช้เป็นภาษาไทยเพื่อให้โมเดลเข้าใจได้ดีขึ้น

**Example:**
\`\`\`
"Summarize the main points of this Thai news article:

[ข่าวเศรษฐกิจไทย: ธนาคารแห่งประเทศไทยประกาศมาตรการใหม่เพื่อกระตุ้นเศรษฐกิจ...]"
\`\`\`

## 8. เลือกภาษาตามความสำคัญ

หากความเป็นธรรมชาติของภาษาไทยสำคัญกว่าการทำตามคำสั่งอย่างแม่นยำ ให้เขียนคำสั่งเป็นภาษาไทย

**Example:**
\`\`\`
❌ "Write a casual conversation between two Thai teenagers discussing their favorite music."

✅ "เขียนบทสนทนาระหว่างวัยรุ่นไทยสองคนที่กำลังคุยกันเรื่องเพลงที่ชอบ ใช้ภาษาวัยรุ่นที่เป็นธรรมชาติ"
\`\`\`

## 9. จำกัดตัวอย่าง Few-Shot

โมเดลภาษาสมัยใหม่มักทำงานได้ดีกว่าด้วยคำสั่งที่ชัดเจนมากกว่าการให้ตัวอย่างจำนวนมาก หากจำเป็นต้องใช้ ไม่ควรเกิน 5 ตัวอย่าง

**Example:**
\`\`\`
"Classify these Thai restaurant reviews as positive, negative, or neutral.

Example 1:
Review: อาหารอร่อยมาก บริการเยี่ยม
Classification: Positive

Example 2:
Review: รสชาติพอใช้ได้ แต่ราคาแพงไปหน่อย
Classification: Neutral

Now classify: รอนานมาก อาหารก็ไม่อร่อย ไม่แนะนำเลย"
\`\`\`

## 10. ระบุชัดเจนเมื่อต้องการผลลัพธ์เป็น JSON

หากคุณต้องการเฉพาะ JSON ให้ระบุอย่างชัดเจน วิธีนี้จะป้องกันไม่ให้โมเดลแสดงกระบวนการคิดของมัน

**Example:**
\`\`\`
"Convert this Thai restaurant information to JSON format. Return ONLY valid JSON without any explanations or additional text:

ชื่อร้าน: บ้านสวน
ที่อยู่: สุขุมวิท 55
เวลาเปิด: 11:00 - 22:00
ประเภทอาหาร: อาหารไทย, อาหารอีสาน"
\`\`\`

## 11. ใช้โค้ดเพื่อทำความสะอาดผลลัพธ์

มักจะง่ายกว่าที่จะทำความสะอาดผลลัพธ์ของโมเดลด้วยโค้ดมากกว่าที่จะพยายามทำให้คำสั่งของคุณสมบูรณ์แบบ

**Example:**
\`\`\`javascript
const extractCodeBlock = (text) => {
  // Regular expression to match code blocks with their fences
  const codeBlockRegex = /\`\`\`(?:[a-zA-Z0-9]+)?([\s\S]*?)\`\`\`/gm;
  
  // Array to store all extracted code blocks
  const extractedBlocks = [];
  
  // Find all code blocks and extract their content
  let match;
  while ((match = codeBlockRegex.exec(text)) !== null) {
    // match[1] contains the content between the code fences
    extractedBlocks.push(match[1].trim());
  }
  
  // Return all extracted code blocks
  return extractedBlocks;
}
\`\`\`

## 12. ใช้โมเดลที่เน้นการคิดเชิงเหตุผลสำหรับงานที่ซับซ้อน

เมื่องานของคุณต้องการการคิดหลายขั้นตอนหรือการแก้ไข ให้ใช้โมเดลที่เน้นการใช้เหตุผล

**Example:**
\`\`\`
"I need to create a comprehensive marketing strategy for a new Thai street food chain targeting tourists and locals. Please think step by step about market research, positioning, pricing, promotion channels, and cultural considerations."
\`\`\`

## 13. ใช้วงจรข้อเสนอแนะ

ปัญหาหลายอย่างสามารถแก้ไขได้ผ่านการให้ข้อเสนอแนะและการปรับปรุงอย่างต่อเนื่อง

**Example:**
\`\`\`
Initial process: Input → LLM → Output
Refined process: JSON.parse(output) → error → LLM → Refined output

"Your previous response had a JSON parsing error. Please fix the following issue and return only valid JSON: Missing comma after the 'name' field."
\`\`\`

## 14. แบ่งงานที่ซับซ้อนออกเป็นส่วนย่อย

สำหรับงานที่ท้าทาย ให้ใช้วิธีแบ่งเพื่อพิชิต

**Example:**
Instead of:
\`\`\`
❌ "Please create a presentation from this market research data." [large text dump]
\`\`\`

Try:
\`\`\`
✅ Step 1: "Please identify the 5 key insights from this market research data." [data]
✅ Step 2: "For insight #1, create a slide with a compelling headline, 3 supporting points, and a visualization suggestion."
✅ Step 3: "Organize these 5 slides into a coherent narrative that flows logically."
\`\`\`

## 15. ใช้คำสั่งที่ชัดเจน

ระบุรายละเอียดเกี่ยวกับสไตล์ รูปแบบ และข้อจำกัดให้ชัดเจน

**Example for Stylization:**
\`\`\`
"Explain blockchain technology in language a 5-year-old Thai child would understand."
\`\`\`

**Example for Formatting:**
\`\`\`
"Answer this question about Thai history and provide citations as numbers [1], [2], etc. Include the full references at the end of your response."
\`\`\`

**Example for Restrictions:**
\`\`\`
"Answer this healthcare question based only on information in the attached documents. If the documents don't contain relevant information, politely decline to answer."
\`\`\`

## 16. ใช้แหล่งข้อมูลภายนอก

ใช้ RAG (Retrieval-Augmented Generation) หรือความสามารถในการค้นหาบนเว็บเพื่อลดการสร้างข้อมูลเท็จ

**Example:**
\`\`\`
"Using the attached Thai medical guidelines, answer the following question about diabetes treatment protocols. Only include information that is explicitly mentioned in the documents."
\`\`\`

ด้วยการนำเทคนิคเหล่านี้ไปใช้ คุณจะสามารถสร้างคำสั่งที่มีประสิทธิภาพมากขึ้นสำหรับ Typhoon และบรรลุผลลัพธ์ที่ดีขึ้นสำหรับกรณีการใช้งานเฉพาะของคุณ อย่าลืมว่าการทำ prompt engineering เป็นกระบวนการต่อเนื่อง – อย่ากลัวที่จะทดลองและปรับปรุงวิธีการของคุณตามผลลัพธ์ที่ได้รับ`;

// Export both English and Thai versions
export const guidelinesMarkdown = {
  en: guidelinesMarkdownEn,
  th: guidelinesMarkdownTh
};
