export type Language = 'en' | 'th';

export const translations = {
  en: {
    // Header
    appName: "Prompt Optimizer",
    beta: "beta",
    
    // Main Section
    poweredBy: "Typhoon-Powered Tool",
    title: "Optimize Your Prompts",
    subtitle: "Craft powerful, effective prompts for your AI interactions with our advanced optimization tools.",
    
    // Tabs
    generatePrompt: "Generate Prompt",
    improvePrompt: "Improve Prompt",
    
    // Generator Tab
    taskDescription: "Task Description",
    taskDescriptionHelp: "Describe your task in detail, and we'll generate an optimized prompt for your LLM.",
    taskPlaceholder: "E.g., Translate the following text to Thai...",
    characters: "characters",
    generating: "Generating...",
    generate: "Generate Prompt",
    generatedPrompt: "Generated Prompt",
    copy: "Copy",
    copied: "Copied!",
    generatedUsingAI: "Generated using AI",
    
    // Improver Tab
    currentPrompt: "Current Prompt",
    currentPromptHelp: "Paste your existing prompt, and we'll optimize it for better results.",
    promptPlaceholder: "Paste your existing prompt here...",
    improving: "Improving...",
    improve: "Improve Prompt",
    improvedPrompt: "Improved Prompt",
    enhancedWithAI: "Enhanced with AI",
    
    // Visualizer Section
    howItWorks: "How It Works",
    improvePromptAlgorithm: "Improve Prompt Algorithm",
    generatePromptAlgorithm: "Generate Prompt Algorithm",
    detailedSteps: "Detailed Steps",
    technicalDetails: "Technical Details",
    viewSourceCode: "View Source Code",
    
    // Improve Visualizer
    promptInput: "Prompt Input",
    existingPromptDesc: "The user submits their existing prompt for improvement.",
    promptAnalysis: "Prompt Analysis",
    promptAnalysisDesc: "The system analyzes the prompt for clarity, structure, and effectiveness.",
    improvedVersion: "Improved Version",
    improvedVersionDesc: "The system generates an enhanced version with better structure and clarity.",
    
    // Improve Steps
    receivePrompt: "Receive Prompt",
    receivePromptDesc: "The system receives the original prompt from the user.",
    analyzePrompt: "Analyze Prompt",
    analyzePromptDesc: "The AI engine evaluates the prompt's structure, clarity, and effectiveness.",
    identifyIssues: "Identify Issues",
    identifyIssuesDesc: "The system identifies ambiguities, unclear instructions, or structural problems.",
    applyTechniques: "Apply Techniques",
    applyTechniquesDesc: "The AI applies prompt engineering principles to enhance the prompt.",
    enhanceStructure: "Enhance Structure",
    enhanceStructureDesc: "The system improves formatting, organization, and overall structure.",
    returnImproved: "Return Result",
    returnImprovedDesc: "The improved prompt is returned to the user, ready for use.",
    
    // Generate Visualizer
    taskInput: "Task Input",
    taskInputDesc: "The user describes the task they need a prompt for.",
    taskAnalysis: "Task Analysis",
    taskAnalysisDesc: "The system analyzes the task requirements and objectives.",
    promptCreation: "Prompt Creation",
    promptCreationDesc: "The system crafts an effective prompt based on the task analysis.",
    
    // Generate Steps
    receiveTask: "Receive Task",
    receiveTaskDesc: "The system receives the task description from the user.",
    analyzeRequirements: "Analyze Requirements",
    analyzeRequirementsDesc: "The AI identifies the core requirements and objectives of the task.",
    identifyComponents: "Identify Components",
    identifyComponentsDesc: "The system determines what elements are needed in an effective prompt.",
    structurePrompt: "Structure Prompt",
    structurePromptDesc: "The AI organizes the prompt with a logical flow and clear instructions.",
    addDetails: "Add Details",
    addDetailsDesc: "The system incorporates specific details and examples when helpful.",
    returnGenerated: "Return Result",
    returnGeneratedDesc: "The completed prompt is returned to the user, ready for use.",
    
    // Technical details
    usesApi: "Uses Typhoon API for advanced prompt engineering",
    modelUsed: "Powered by {{model}} language model",
    optimizedPromptTemplate: "Optimized meta-prompt for prompt improvement",
    customizedPromptTemplate: "Specialized meta-prompt for prompt generation",
    responseProcessing: "Intelligent response processing and formatting",
    responseAnalysis: "Sophisticated response analysis and extraction",
    
    // Footer
    builtWith: "Built with",
    allRightsReserved: "",
    
    // Language Switcher
    languageSwitcher: "Language",
  },
  th: {
    // Header
    appName: "Prompt Optimizer",
    beta: "beta",
    
    // Main Section
    poweredBy: "ขับเคลื่อนด้วย Typhoon",
    title: "ปรับแต่งคำสั่งของคุณ",
    subtitle: "สร้างคำสั่งที่ทรงพลังและมีประสิทธิภาพสำหรับการโต้ตอบกับ AI ด้วยเครื่องมือการปรับแต่งขั้นสูงของเรา",
    
    // Tabs
    generatePrompt: "สร้าง Prompt",
    improvePrompt: "ปรับปรุง Prompt",
    
    // Generator Tab
    taskDescription: "คำอธิบายงาน",
    taskDescriptionHelp: "อธิบายงานของคุณอย่างละเอียด และเราจะสร้างคำสั่งที่เหมาะสมสำหรับ LLM ของคุณ",
    taskPlaceholder: "เช่น แปลภาษาข้อความต่อไปนี้เป็นภาษาไทย...",
    characters: "ตัวอักษร",
    generating: "กำลังสร้าง...",
    generate: "สร้างคำสั่ง",
    generatedPrompt: "คำสั่งที่สร้างขึ้น",
    copy: "คัดลอก",
    copied: "คัดลอกแล้ว!",
    generatedUsingAI: "สร้างโดยใช้ AI",
    
    // Improver Tab
    currentPrompt: "Prompt ปัจจุบัน",
    currentPromptHelp: "วาง prompt ที่มีอยู่ของคุณ และเราจะปรับให้ดีขึ้นเพื่อผลลัพธ์ที่ดีขึ้น",
    promptPlaceholder: "วาง prompt ที่มีอยู่ของคุณที่นี่...",
    improving: "กำลังปรับปรุง...",
    improve: "ปรับปรุง Prompt",
    improvedPrompt: "Prompt ที่ปรับปรุงแล้ว",
    enhancedWithAI: "ปรับปรุงด้วย AI",
    
    // Visualizer Section
    howItWorks: "วิธีการทำงาน",
    improvePromptAlgorithm: "อัลกอริทึมการปรับปรุง Prompt",
    generatePromptAlgorithm: "อัลกอริทึมการสร้าง Prompt",
    detailedSteps: "ขั้นตอนโดยละเอียด",
    technicalDetails: "รายละเอียดทางเทคนิค",
    viewSourceCode: "ดูซอร์สโค้ด",
    
    // Improve Visualizer
    promptInput: "Input Prompt",
    existingPromptDesc: "ผู้ใช้ส่ง prompt ที่มีอยู่เพื่อการปรับปรุง",
    promptAnalysis: "การวิเคราะห์ Prompt",
    promptAnalysisDesc: "ระบบวิเคราะห์ prompt เพื่อความชัดเจน โครงสร้าง และประสิทธิภาพ",
    improvedVersion: "เวอร์ชันที่ปรับปรุงแล้ว",
    improvedVersionDesc: "ระบบสร้างเวอร์ชันที่ดีขึ้นด้วยโครงสร้างและความชัดเจนที่ดีขึ้น",
    
    // Improve Steps
    receivePrompt: "รับ Prompt",
    receivePromptDesc: "ระบบรับ prompt ต้นฉบับจากผู้ใช้",
    analyzePrompt: "วิเคราะห์ Prompt",
    analyzePromptDesc: "AI ประเมินโครงสร้าง ความชัดเจน และประสิทธิภาพของ prompt",
    identifyIssues: "ระบุปัญหา",
    identifyIssuesDesc: "ระบบระบุความคลุมเครือ คำสั่งที่ไม่ชัดเจน หรือปัญหาโครงสร้าง",
    applyTechniques: "ประยุกต์ใช้เทคนิค",
    applyTechniquesDesc: "AI ใช้หลักการวิศวกรรม prompt เพื่อเพิ่มประสิทธิภาพ prompt",
    enhanceStructure: "ปรับปรุงโครงสร้าง",
    enhanceStructureDesc: "ระบบปรับปรุงการจัดรูปแบบ การจัดระเบียบ และโครงสร้างโดยรวม",
    returnImproved: "ส่งคืนผลลัพธ์",
    returnImprovedDesc: "prompt ที่ปรับปรุงแล้วจะถูกส่งกลับไปยังผู้ใช้ พร้อมสำหรับการใช้งาน",
    
    // Generate Visualizer
    taskInput: "Input งาน",
    taskInputDesc: "ผู้ใช้อธิบายงานที่ต้องการ prompt",
    taskAnalysis: "การวิเคราะห์งาน",
    taskAnalysisDesc: "ระบบวิเคราะห์ความต้องการและวัตถุประสงค์ของงาน",
    promptCreation: "การสร้าง Prompt",
    promptCreationDesc: "ระบบสร้าง prompt ที่มีประสิทธิภาพตามการวิเคราะห์งาน",
    
    // Generate Steps
    receiveTask: "รับงาน",
    receiveTaskDesc: "ระบบรับคำอธิบายงานจากผู้ใช้",
    analyzeRequirements: "วิเคราะห์ความต้องการ",
    analyzeRequirementsDesc: "AI ระบุความต้องการหลักและวัตถุประสงค์ของงาน",
    identifyComponents: "ระบุองค์ประกอบ",
    identifyComponentsDesc: "ระบบกำหนดว่าองค์ประกอบใดที่จำเป็นใน prompt ที่มีประสิทธิภาพ",
    structurePrompt: "จัดโครงสร้าง Prompt",
    structurePromptDesc: "AI จัดระเบียบ prompt ด้วยการไหลอย่างมีเหตุผลและคำแนะนำที่ชัดเจน",
    addDetails: "เพิ่มรายละเอียด",
    addDetailsDesc: "ระบบรวมรายละเอียดเฉพาะและตัวอย่างเมื่อเป็นประโยชน์",
    returnGenerated: "ส่งคืนผลลัพธ์",
    returnGeneratedDesc: "prompt ที่เสร็จสมบูรณ์จะถูกส่งกลับไปยังผู้ใช้ พร้อมสำหรับการใช้งาน",
    
    // Technical details
    usesApi: "ใช้ Typhoon API สำหรับวิศวกรรม prompt ขั้นสูง",
    modelUsed: "ขับเคลื่อนโดยโมเดลภาษา {{model}}",
    optimizedPromptTemplate: "meta-prompt ที่เหมาะสมสำหรับการปรับปรุง prompt",
    customizedPromptTemplate: "meta-prompt เฉพาะสำหรับการสร้าง prompt",
    responseProcessing: "การประมวลผลและการจัดรูปแบบการตอบสนองอย่างชาญฉลาด",
    responseAnalysis: "การวิเคราะห์และการสกัดการตอบสนองที่ซับซ้อน",
    
    // Footer
    builtWith: "สร้างด้วย",
    allRightsReserved: "",
    
    // Language Switcher
    languageSwitcher: "ภาษา",
  }
}; 