const recipesData = [
  {
    id: '1',
    name: 'Bandeja Paisa',
    category: 'Colombiana',
    prepTime: '60 min',
    difficulty: 'Alta',
    ingredients: ['Frijoles', 'Arroz', 'Carne molida', 'Chicharrón', 'Huevo', 'Plátano maduro', 'Aguacate'],
    steps: [
      'Remojar y cocinar los frijoles con pezuña.',
      'Preparar el arroz blanco y la carne molida.',
      'Freír el chicharrón hasta que esté crocante.',
      'Preparar las tajadas de plátano y el huevo frito.',
      'Servir de forma estética en una bandeja grande.'
    ],
    emoji: '🍛'
  },
  {
    id: '2',
    name: 'Ajiaco Santafereño',
    category: 'Colombiana',
    prepTime: '50 min',
    difficulty: 'Media',
    ingredients: ['Pollo', 'Papa criolla', 'Papa pastusa', 'Papa sabanera', 'Guascas', 'Mazorca'],
    steps: [
      'Cocinar el pollo con las mazorcas.',
      'Agregar los tres tipos de papas en orden de dureza.',
      'Dejar que la papa criolla se deshaga para espesar.',
      'Añadir las guascas al final para el aroma característico.',
      'Servir con crema de leche y alcaparras.'
    ],
    emoji: '🍲'
  },
  {
    id: '3',
    name: 'Paella Valenciana',
    category: 'Española',
    prepTime: '45 min',
    difficulty: 'Alta',
    ingredients: ['Arroz bomba', 'Conejo', 'Pollo', 'Garrafó', 'Judía verde', 'Azafrán'],
    steps: [
      'Sofreír la carne en la paella con aceite de oliva.',
      'Añadir la verdura y el tomate rallado.',
      'Agregar el agua y el azafrán para crear el caldo.',
      'Añadir el arroz y cocinar sin remover.',
      'Dejar reposar para conseguir el "socarrat".'
    ],
    emoji: '🥘'
  },
  {
    id: '4',
    name: 'Butter Chicken (Murgh Makhani)',
    category: 'India',
    prepTime: '40 min',
    difficulty: 'Media',
    ingredients: ['Pollo', 'Yogur', 'Garam masala', 'Tomate', 'Mantequilla', 'Nata'],
    steps: [
      'Marinar el pollo en yogur y especias.',
      'Cocinar el pollo al horno o sartén.',
      'Preparar la salsa makhani con tomate y mucha mantequilla.',
      'Combinar el pollo con la salsa y añadir la nata.',
      'Servir con pan Naan caliente.'
    ],
    emoji: '🍗'
  },
  {
    id: '5',
    name: 'Arroz con Leche',
    category: 'Postres',
    prepTime: '35 min',
    difficulty: 'Baja',
    ingredients: ['Arroz', 'Leche', 'Canela en rama', 'Azúcar', 'Cáscara de limón'],
    steps: [
      'Cocer el arroz con agua, canela y limón.',
      'Añadir la leche y el azúcar cuando el agua se consuma.',
      'Remover constantemente a fuego lento hasta espesar.',
      'Retirar la canela y el limón.',
      'Espolvorear canela en polvo al servir.'
    ],
    emoji: '🍚'
  },
  {
    id: '6',
    name: 'Sancocho Trifásico',
    category: 'Colombiana',
    prepTime: '90 min',
    difficulty: 'Alta',
    ingredients: ['Pollo', 'Res', 'Cerdo', 'Plátano verde', 'Yuca', 'Papa', 'Cilantro'],
    steps: [
      'Poner a hervir el agua con las carnes de res y cerdo primero.',
      'Agregar el plátano verde y dejar cocinar 20 minutos.',
      'Añadir el pollo, la yuca y la papa.',
      'Cocinar hasta que todo esté tierno y el caldo espese.',
      'Finalizar con cilantro fresco picado.'
    ],
    emoji: '🥣'
  },
  {
    id: '7',
    name: 'Tortilla Española',
    category: 'Española',
    prepTime: '30 min',
    difficulty: 'Media',
    ingredients: ['Patatas', 'Huevos', 'Cebolla', 'Aceite de oliva', 'Sal'],
    steps: [
      'Freír las patatas y la cebolla en abundante aceite a fuego lento.',
      'Escurrir bien el aceite y mezclar con los huevos batidos.',
      'Cuajar en una sartén con una gota de aceite.',
      'Dar la vuelta con un plato y dorar por el otro lado.'
    ],
    emoji: '🍳'
  },
  {
    id: '8',
    name: 'Chicken Tikka Masala',
    category: 'India',
    prepTime: '50 min',
    difficulty: 'Media',
    ingredients: ['Pollo', 'Comino', 'Cilantro', 'Cúrcuma', 'Salsa de tomate', 'Nata'],
    steps: [
      'Marinar trozos de pollo en yogur y especias por 2 horas.',
      'Asar el pollo hasta que esté ligeramente quemado.',
      'Cocinar en una salsa especiada de tomate y crema.',
      'Servir con arroz basmati.'
    ],
    emoji: '🍛'
  },
  {
    id: '9',
    name: 'Tiramisú',
    category: 'Postres',
    prepTime: '40 min',
    difficulty: 'Media',
    ingredients: ['Mascarpone', 'Café', 'Bizcochos de soletilla', 'Huevo', 'Cacao', 'Azúcar'],
    steps: [
      'Mezclar el mascarpone con las yemas y el azúcar.',
      'Sumergir rápidamente los bizcochos en café frío.',
      'Hacer capas de bizcocho y crema de queso.',
      'Refrigerar al menos 4 horas y espolvorear cacao antes de servir.'
    ],
    emoji: '🍰'
  }
];

export default recipesData;
