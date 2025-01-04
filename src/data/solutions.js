import { IoBarChart, IoTrendingUp } from "react-icons/io5";
import { LuBot } from "react-icons/lu";

export const CORE_SOLUTIONS = [
  {
    id: 'financial-automation',
    problem: "Consolidación financiera manual consumiendo recursos valiosos",
    impact: "34% de reducción en tiempo de proceso",
    icon: <IoBarChart className="w-12 h-12 text-blue-600" />,
    shortDescription: "¿Tu equipo financiero dedica demasiado tiempo a tareas manuales?",
    fullDescription: `¿Te enfrentas a estos desafíos?
      • Procesos manuales que consumen tiempo valioso de tu equipo
      • Alta tasa de errores en consolidación de datos
      • Demoras significativas en generación de reportes
      • Falta de visibilidad en tiempo real de KPIs financieros`,
    benefits: [
      "Reducción del 34% en tiempo de consolidación financiera",
      "73% menos errores en reportes mediante automatización",
      "Dashboards automatizados con actualización en tiempo real",
      "Mayor tiempo para análisis estratégico del equipo"
    ],
    methodology: [
      "Diagnóstico de procesos actuales y puntos críticos",
      "Implementación de automatizaciones (RPA + Power BI)",
      "Integración con sistemas existentes (SAP, Oracle)",
      "Optimización continua y monitoreo de KPIs"
    ],
    caseStudy: {
      company: "Grupo Gloria",
      role: "Especialista de Transformación Digital",
      achievement: "Reducción de 34% en tiempo de consolidación financiera",
      details: "Implementación de dashboard integrado (Power BI + SAP) para automatizar consolidación de P&L, balance y flujo de caja.",
      results: [
        "63% del tiempo del equipo liberado de tareas repetitivas",
        "34% reducción en workload mediante automatización",
        "Implementación de bluebook para estandarización de procesos"
      ]
    },
    bluebook: {
      title: "Blueprint: Automatización Financiera",
      downloadLabel: "Descargar metodología detallada",
      chapters: [
        "Diagnóstico de procesos financieros",
        "Framework de automatización",
        "Integración de sistemas",
        "Mejores prácticas y casos de éxito"
      ]
    }
  },
  {
    id: 'process-optimization',
    problem: "Procesos industriales con baja visibilidad y control",
    impact: "46% de mejora en confiabilidad",
    icon: <IoTrendingUp className="w-12 h-12 text-blue-600" />,
    shortDescription: "¿Necesitas mayor visibilidad y control en tus procesos industriales?",
    fullDescription: `¿Enfrentas estos retos operativos?
      • Falta de visibilidad en tiempo real de procesos críticos
      • Pérdidas por ineficiencias operativas no detectadas
      • Decisiones basadas en datos históricos o incompletos
      • Dificultad para predecir y prevenir fallas`,
    benefits: [
      "46% mejora en confiabilidad de procesos críticos",
      "24% reducción en tiempos de implementación",
      "Monitoreo en tiempo real de variables clave",
      "Predicción temprana de fallas potenciales"
    ],
    methodology: [
      "Análisis de procesos críticos y variables clave",
      "Implementación de sensores IoT estratégicos",
      "Desarrollo de modelos predictivos ML/AI",
      "Optimización continua mediante DMAIC"
    ],
    caseStudy: {
      company: "Vitapro",
      role: "Lead Project Manager - IoT",
      achievement: "Incremento de 46% en confiabilidad de proceso",
      details: "Desarrollo de prototipo hardware IoT para optimización de procesos productivos",
      results: [
        "78% reducción en incertidumbre de desarrollo",
        "Implementación de prácticas Agile y Scrum",
        "Sistema IoT con capacidades analíticas avanzadas"
      ]
    },
    bluebook: {
      title: "Blueprint: Optimización Industrial",
      downloadLabel: "Ver caso de estudio completo",
      chapters: [
        "Metodología de optimización de procesos",
        "Implementación de IoT industrial",
        "Framework de análisis predictivo",
        "ROI y casos de éxito"
      ]
    }
  },
  {
    id: 'digital-transformation',
    problem: "Transformación digital sin resultados tangibles",
    impact: "78% de reducción en incertidumbre",
    icon: <LuBot className="w-12 h-12 text-blue-600" />,
    shortDescription: "¿Tus iniciativas digitales no generan el ROI esperado?",
    fullDescription: `¿Te preocupan estos aspectos?
      • Inversiones tecnológicas sin retorno claro
      • Resistencia al cambio en la organización
      • Falta de metodología probada de implementación
      • Dificultad para medir el impacto real`,
    benefits: [
      "78% menos incertidumbre en implementación de proyectos",
      "12% mejora en adopción de OKRs",
      "ROI medible en primeros 90 días",
      "Framework claro para gestión del cambio"
    ],
    methodology: [
      "Diagnóstico de madurez digital",
      "Implementación ágil por fases",
      "Gestión del cambio estructurada",
      "Medición continua de KPIs"
    ],
    caseStudy: {
      company: "Alicorp",
      role: "Lead Product Manager",
      achievement: "Reducción de 78% en incertidumbre de proyectos digitales",
      details: "Desarrollo de ecosistema digital integrado con capacidades analíticas",
      results: [
        "46% mejora en confiabilidad de productos",
        "24% reducción en tiempos de deployment",
        "12% incremento en adherencia a OKRs"
      ]
    },
    bluebook: {
      title: "Blueprint: Transformación Digital",
      downloadLabel: "Obtener guía metodológica",
      chapters: [
        "Framework de transformación digital",
        "Metodología de implementación ágil",
        "Gestión del cambio organizacional",
        "Medición de resultados"
      ]
    }
  }
];

export const SOLUTION_CATEGORIES = [
  {
    title: "Finanzas",
    description: "Automatización y optimización de procesos financieros",
    solutions: ['financial-automation']
  },
  {
    title: "Operaciones",
    description: "Mejora de procesos industriales y productivos",
    solutions: ['process-optimization']
  },
  {
    title: "Tecnología",
    description: "Transformación digital e implementación de ML/AI",
    solutions: ['digital-transformation']
  }
];

export const METHODOLOGIES = {
  diagnosisPhase: {
    title: "Diagnóstico",
    steps: [
      "Análisis de procesos actuales",
      "Identificación de puntos críticos",
      "Evaluación de madurez digital",
      "Definición de KPIs"
    ]
  },
  implementationPhase: {
    title: "Implementación",
    steps: [
      "Plan de acción personalizado",
      "Desarrollo ágil por sprints",
      "Gestión del cambio",
      "Medición continua"
    ]
  },
  optimizationPhase: {
    title: "Optimización",
    steps: [
      "Análisis de resultados",
      "Ajustes basados en datos",
      "Mejora continua",
      "Documentación de mejores prácticas"
    ]
  }
};