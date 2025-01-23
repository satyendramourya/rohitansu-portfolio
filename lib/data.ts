type Command = {
    cmd: string;
    desc: string;
    tab: number;
}[];




export const commands: Command = [
    // { cmd: "pwd", desc: "print current working directory", tab: 10 },
    { cmd: "help", desc: "check available commands", tab: 9 },
    { cmd: "welcome", desc: "welcome note", tab: 6 },
    { cmd: "about", desc: "about Rohitansu Pradhan", tab: 8 },
    { cmd: "education", desc: "my education background", tab: 4 },
    { cmd: "email", desc: "send an email to me", tab: 8 },
    // { cmd: "core-competencies", desc: "about core-competencies section", tab: 8 },
    { cmd: "certifications", desc: "certificates", tab: 8 },
    { cmd: "skills", desc: "tech & Non-tech skills", tab: 8 },
    // { cmd: "profile-summary", desc: "summary", tab: 8 },
    { cmd: "work-experience", desc: "about Working experience.", tab: 8 },
    { cmd: "who-am-i", desc: "about current user", tab: 7 },
    { cmd: "history", desc: "recent history", tab: 8 },
    { cmd: "clear", desc: "clear the terminal", tab: 8 },
];



export const about = {
    fullName: "ROHITANSU PRADHAN",
    position: "CYBERSECURITY ANALYST",
    location: "Bangalore",
    puspose: "Technology and result-oriented professional, specializing in Offensive Security within the Cyber Security domain, with a keen interest in leveraging expertise in Network, Web Application, and Mobile Security to contribute effectively to a dynamic organization.",
    email: "pradhanrohitansu@gmail.com",
    emailLink: "mailto:pradhanrohitansu@gmail.com",
    Linkedin: "Linkedin.RohitansuPradhan",
    LinkedinLink: "https://www.linkedin.com/in/rohitansupradhan/"
}

export const coreCompetencies = [
    "Cyber Security Excellence ",
    "Offensive Security ",
    "Network / Mobile Security ",
    "Web Application Security ",
    "Compliance and Standards ",
    "Information Security Policy Management ",
    "Requirement Gathering & Analysis ",
    "Risk Assessment & Mitigation ",
    "Continuous Process Improvement /  Transition & Migration ",
    "Data Privacy & Protection ",
    "Technology & Operational Risk ",
    "Management         ",
    "Cross - functional Coordination",
]

export const certifications = [
    "Certified Ethical Hacker(V12) - EC Council",
    "Switching, Routing & Wireless Essentials - CCNA",
    "Certified Penetration Tester - Red Team Academy",
    "CompTIA Security + (SY0 - 701) - Udemy",
    "CompTIA Pentest + - Udemy",
    "Cybersecurity Essentials - CCNA",
    "Cybersecurity Analyst Professional - IBM",
    "Programming Essentials in Python - PCAP",
    "Certified Development Associate - ABAP - SAP",
    "Core Java - Central Tool Room & Training Center",
]

export const education = [
    {
        degree: "Bachelor of Technology(Computer Science)",
        university: "Biju Patnaik University of Technology",
        year: "2022",
        cgpa: "8.7",
    },
    {
        degree: "Senior Secondary Education",
        university: "Pragati Group of Institutions",
        year: "2018",
        cgpa: "75%",
    },
    {
        degree: "Secondary Education",
        university: "Vimala Convent School",
        year: "2016",
        cgpa: "82%",
    },
]

export const technicalSkills = [
    {
        category: "Web App Penetration Testing",
        skills: ["Burp Suite Pro", "Owasp Zap", "Acunetix for Assessments"],
    },
    {
        category: "Network Testing",
        skills: ["Zenmap", "Nmap", "Metasploit", "Wireshark", "Aircrack-ng"],
    },
    {
        category: "Mobile Security",
        skills: ["Drozer", "Frida", "Moblexer for Android/iOS"],
    },
    {
        category: "Languages",
        skills: ["Python", "Java", "C", "HTML", "SQL", "Solidity", "JavaScript"],
    },
    {
        category: "Tools Mastery",
        skills: ["Nessus", "OpenVas", "VSCode", "Splunk"],
    },
    {
        category: "Standards",
        skills: ["OWASP Top 10", "SANS Top 25", "NIST"],
    },
]

export const softSkills = [
    "Attention to Details",
    "Result-oriented",
    "Problem-solving",
    "Analytical Thinking",
    "Decision-making",
]


export const profileSummary = [
    "Possess over 1 year of experience in Cyber Security, primarily focusing on Offensive Security in the industry, currently excelling as a Cybersecurity Analyst at Indian CyberSecurity Solutions; displayed proficiency in conducting Network Pentesting, Web Application Pentesting, and iOS and Android Pentesting.",
    "Proficient in conducting comprehensive penetration tests across various platforms including networks, web applications, and mobile devices; skilled in identifying vulnerabilities and exploiting the same to assess the security posture of organizations.",
    "Experienced in gathering and analyzing cyber threat intelligence to proactively identify potential threats and vulnerabilities; capable of providing actionable insights to enhance security posture and mitigate emerging risks.",
    "Expert in conducting Red Team operations to assess an organization's overall security posture; skilled in emulating sophisticated adversaries to identify weaknesses in defense mechanisms and recommend strategic improvements.",
    "Committed to continuous learning and staying updated with the latest offensive security techniques, tools, and trends; capable of innovating new methodologies and approaches to stay ahead of evolving cyber threats.",
]

export const workExperience = [
    {
        position: "Cybersecurity Analyst",
        company: "Indian CyberSecurity Solutions",
        duration: "June 2021 - Present",

        responsibilities: [
            "Performing network, web application, iOS, and Android penetration testing, identifying and mitigating security vulnerabilities across multiple platforms.",
            "Conducting vulnerability assessments and penetration testing, delivering comprehensive reports and recommendations to enhance their security posture.",
            "Leading cybersecurity awareness seminars, educating attendees on best practices and emerging threats to improve overall organizational security.", "Utilizing strong technical skills in Python, networking, and web application security to develop and implement effective security solutions. ", "Implementing security protocols and tools to protect against malware, phishing, and other cyber threats."
        ],
        highlight: [
            "Vulnerability Assessment and Penetration Testing: Successfully conducted vulnerability assessment and penetration testing for over 15 clients, resulting in a 70 % increase in cybersecurity resilience.",
            "Virtual Machines and Capture The Flag Challenges: Developed Virtual machines and Capture The Flag Challenges, enhancing practical skills and knowledge sharing within the team.",
            "Mentorship as CEH and CCNA: Mentored aspiring professionals as a Certified Ethical Hacker(CEH) and Cisco Certified Network Associate(CCNA) Mentor, contributing to their professional growth."
        ]

    },
    {
        position: "Cybersecurity Intern",
        company: "Palo Alto Networks Cybersecurity Academy",
        duration: "Mar 2022 - May 2022",

        responsibilities: [
            "Developed a Decentralized Voting System utilizing Ethereum blockchain and smart contracts, showcasing advanced proficiency in blockchain technology.",
            "Created a proof of concept for the project by applying technical skills in Solidity, JavaScript, HTML, CSS, and utilizing tools like NPM, Truffle, Ganache, and Metamask.",
            "Researched current cybersecurity trends and emerging threats to enhance the system's security and resilience against potential vulnerabilities.",
            "Collaborated with team members to develop and implement security policies and procedures for the academy's network and systems, ensuring a secure and functional project outcome."
        ]
    }
]




