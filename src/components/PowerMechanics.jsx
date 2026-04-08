import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const exams = [
  // TERM 1
  {
    term: "Term 1",
    focus: "Mechanics",
    sections: [
      {
        title: "Section A: Short Answer Questions (20 Marks)",
        questions: [
          "Define power in mechanics. (2 marks)",
          "State two types of mechanical forces. (2 marks)",
          "What is torque? Give its SI unit. (2 marks)",
          "Distinguish between work and energy. (2 marks)",
          "A lever exerts a force of 50 N at a distance of 2 m from the fulcrum. Calculate the torque. (2 marks)",
          "Define friction and give two types. (2 marks)",
          "What is mechanical advantage? (2 marks)",
          "State one application of pulleys. (2 marks)",
          "Define efficiency in machines. (2 marks)",
          "Give one example of a simple machine. (2 marks)"
        ]
      },
      {
        title: "Section B: Structured Questions (30 Marks)",
        questions: [
          "(a) Define work done. (2 marks)\n(b) A force of 20 N moves a machine 5 m. Calculate work done. (3 marks)",
          "(a) Define mechanical advantage. (2 marks)\n(b) A pulley system lifts a load of 200 N using an effort of 50 N. Find the mechanical advantage. (3 marks)",
          "(a) What is a lever? (2 marks)\n(b) A 10 kg load is lifted with a force of 50 N at 2 m from fulcrum. Calculate torque. (3 marks)",
          "(a) Define efficiency. (2 marks)\n(b) A machine uses 500 J to do 400 J of useful work. Find efficiency. (3 marks)",
          "(a) Define speed ratio. (2 marks)\n(b) A machine has a speed ratio of 5 and effort distance of 2 m. Calculate load distance. (3 marks)"
        ]
      },
      {
        title: "Section C: Long Answer Questions (50 Marks)",
        questions: [
          "(a) Explain Newton’s laws of motion in relation to machines. (6 marks)\n(b) Give two real-life applications of each law. (4 marks)",
          "(a) Define kinetic energy in machines. (2 marks)\n(b) Derive formula for kinetic energy. (4 marks)\n(c) Calculate kinetic energy of a 5 kg object moving at 4 m/s. (4 marks)",
          "(a) Explain types of levers with examples. (6 marks)\n(b) Draw a diagram of a first-class lever lifting a load. (4 marks)",
          "(a) Define work, power, and energy in machines. (6 marks)\n(b) A machine does 1000 J of work in 20 seconds. Calculate power. (4 marks)",
          "(a) Explain simple machines: pulley, lever, inclined plane. (6 marks)\n(b) State advantages of using machines. (4 marks)"
        ]
      }
    ],
    markingScheme: [
      "Torque = Force × Distance → 50 × 2 = 100 Nm",
      "Work = Force × Distance → 20 × 5 = 100 J",
      "Mechanical Advantage = Load / Effort → 200 ÷ 50 = 4",
      "Efficiency = (Useful Work / Input Work) × 100 → 400 ÷ 500 × 100 = 80%",
      "Power = Work / Time → 1000 ÷ 20 = 50 W",
      "Kinetic Energy = ½ mv² → ½ × 5 × 16 = 40 J"
    ]
  },

  // TERM 2
  {
    term: "Term 2",
    focus: "Hydraulics & Rotational Machines",
    sections: [
      {
        title: "Section A: Short Answer Questions (20 Marks)",
        questions: [
          "Define hydraulic system. (2 marks)",
          "State Pascal’s principle. (2 marks)",
          "What is a pump? (2 marks)",
          "Define torque in rotational machines. (2 marks)",
          "Name two types of gears. (2 marks)",
          "What is angular velocity? (2 marks)",
          "Define rotational inertia. (2 marks)",
          "Give one example of a hydraulic machine. (2 marks)",
          "State one safety precaution when using rotational machines. (2 marks)",
          "Define work done by rotating machine. (2 marks)"
        ]
      },
      {
        title: "Section B: Structured Questions (30 Marks)",
        questions: [
          "(a) Define torque. (2 marks)\n(b) A wheel radius 0.5 m has a force of 100 N applied tangentially. Calculate torque. (3 marks)",
          "(a) State Pascal’s principle. (2 marks)\n(b) A force of 200 N is applied on a piston of area 0.1 m². Find pressure. (3 marks)",
          "(a) Define gear ratio. (2 marks)\n(b) A driving gear has 20 teeth and a driven gear has 80 teeth. Find the gear ratio. (3 marks)",
          "(a) Define angular velocity. (2 marks)\n(b) A wheel rotates 10 times in 5 seconds. Calculate angular velocity in rad/s. (3 marks)",
          "(a) Define hydraulic power. (2 marks)\n(b) Water exerts 500 N over 0.2 m² at 3 m/s. Calculate hydraulic power. (3 marks)"
        ]
      },
      {
        title: "Section C: Long Answer Questions (50 Marks)",
        questions: [
          "(a) Explain working of a hydraulic lift. (6 marks)\n(b) Calculate load lifted if input force is 100 N on 0.01 m² piston and output piston area is 0.5 m². (4 marks)",
          "(a) Explain types of gears: spur, bevel, worm. (6 marks)\n(b) State one application of each. (4 marks)",
          "(a) Define rotational kinetic energy. (2 marks)\n(b) Derive formula. (4 marks)\n(c) Calculate rotational KE of wheel I = 2 kg·m², ω = 3 rad/s. (4 marks)",
          "(a) Explain centrifugal force in rotating machines. (6 marks)\n(b) Give two practical applications. (4 marks)",
          "(a) Explain hydraulic machines in industries. (6 marks)\n(b) State advantages over mechanical machines. (4 marks)"
        ]
      }
    ],
    markingScheme: [
      "Torque = F × r → 100 × 0.5 = 50 Nm",
      "Pressure = Force / Area → 200 ÷ 0.1 = 2000 Pa",
      "Gear Ratio = Driven / Driver → 80 ÷ 20 = 4",
      "Angular velocity ω = θ/t → 10×2π ÷ 5 = 12.57 rad/s",
      "Rotational KE = ½ Iω² → ½ × 2 × 9 = 9 J"
    ]
  },

  // TERM 3
  {
    term: "Term 3",
    focus: "Energy, Gears, Pulleys & Levers",
    sections: [
      {
        title: "Section A: Short Answer Questions (20 Marks)",
        questions: [
          "Define energy in machines. (2 marks)",
          "State two types of pulleys. (2 marks)",
          "What is mechanical advantage? (2 marks)",
          "Define work done by a lever. (2 marks)",
          "State the law of conservation of energy. (2 marks)",
          "Name two types of levers. (2 marks)",
          "Define speed ratio. (2 marks)",
          "Give one example of a compound machine. (2 marks)",
          "State one safety rule when using gears. (2 marks)",
          "Define efficiency of a machine. (2 marks)"
        ]
      },
      {
        title: "Section B: Structured Questions (30 Marks)",
        questions: [
          "(a) Define work. (2 marks)\n(b) A lever applies 50 N over 2 m. Calculate work done. (3 marks)",
          "(a) Define mechanical advantage. (2 marks)\n(b) A pulley system lifts 200 N with effort 50 N. Calculate MA. (3 marks)",
          "(a) Define speed ratio. (2 marks)\n(b) A belt drives a pulley with driver 20 rpm and driven 80 rpm. Find speed ratio. (3 marks)",
          "(a) Define efficiency. (2 marks)\n(b) A machine input 500 J, output 400 J. Find efficiency. (3 marks)",
          "(a) Define kinetic and potential energy. (2 marks)\n(b) Calculate PE of 5 kg object at 10 m height. (3 marks)"
        ]
      },
      {
        title: "Section C: Long Answer Questions (50 Marks)",
        questions: [
          "(a) Explain compound machines with examples. (6 marks)\n(b) Draw diagram showing pulley and lever combination. (4 marks)",
          "(a) Explain advantages of using pulleys in lifting. (6 marks)\n(b) Calculate load lifted using pulley system: effort = 50 N, MA = 4. (4 marks)",
          "(a) Explain types of levers with real-life applications. (6 marks)\n(b) Draw first, second, and third-class lever diagrams. (4 marks)",
          "(a) Define energy conservation in machines. (6 marks)\n(b) Give two examples where energy is conserved in mechanical systems. (4 marks)",
          "(a) Explain efficiency and losses in machines. (6 marks)\n(b) Calculate efficiency if input = 1000 J, output = 800 J. (4 marks)"
        ]
      }
    ],
    markingScheme: [
      "Work = F × d → 50 × 2 = 100 J",
      "Mechanical Advantage = Load / Effort → 200 ÷ 50 = 4",
      "Speed Ratio = Driven / Driver → 80 ÷ 20 = 4",
      "Efficiency = (Output / Input) ×100 → 400 ÷ 500 ×100 = 80%",
      "Potential Energy = mgh → 5 × 10 × 10 = 500 J"
    ]
  }
];

const ExamPage = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <button
        onClick={handlePrint}
        style={{
          background: "#1a73e8",
          color: "#fff",
          padding: "10px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        📥 Download Exam as PDF
      </button>

      <div ref={componentRef}>
        <h1 style={{ textAlign: "center" }}>CBC Power Mechanics Exams (Grade 10)</h1>

        {exams.map((exam, idx) => (
          <div key={idx} style={{ marginTop: "30px" }}>
            <h2>{exam.term} - {exam.focus}</h2>

            {exam.sections.map((sec, i) => (
              <div key={i} style={{ marginTop: "20px" }}>
                <h3>{sec.title}</h3>
                <ol>
                  {sec.questions.map((q, j) => (
                    <li key={j} style={{ marginBottom: "8px", whiteSpace: "pre-line" }}>{q}</li>
                  ))}
                </ol>
              </div>
            ))}

            <h3>✅ Marking Scheme (Sample Answers)</h3>
            <ul>
              {exam.markingScheme.map((m, k) => (
                <li key={k}>{m}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamPage;