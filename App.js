import React, { useState } from 'react';
import { StatusBar, Image, ImageBackground } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import background from './image/b.jpeg';

export default function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levels = [
    {
      level: 'Nível 1',
      questions: [
        {
          question: '1 - Qual é o nome do rio mais importante do Estado do Rio de Janeiro?',
          options: ['Rio Paraíba do Sul', 'Rio Guandu', 'Rio São Francisco'],
          correctAnswer: 'Rio Paraíba do Sul',
        },
        {
          question: '2 - Por que o Rio Paraíba do Sul é importante para as pessoas que vivem na região?',
          options: ['O rio é essencial por ser o único a desempenhar um papel fundamental no transporte, entre os Municípios.', 'O Rio Paraíba do Sul não possui relevância para a população local, sendo apenas um curso d\'água comum.', 'O rio é essencial para abastecimento das casas, agricultura e geração de energia.'],
          correctAnswer: 'O rio é essencial para abastecimento das casas, agricultura e geração de energia.',
        },
        {
          question: '3 - O que podemos fazer para ajudar a preservar o Rio Paraíba do Sul?',
          options: ['Evitar o desperdício de água, não jogar resíduos no rio e participar de iniciativas de limpeza e conscientização ambiental.', 'O Rio Paraíba do Sul possui uma grande capacidade autodepuradora, garantindo a qualidade de sua água de forma natural.', 'A poluição do Rio Paraíba do Sul não representa nenhuma preocupação para a saúde da população local.'],
          correctAnswer: 'Evitar o desperdício de água, não jogar resíduos no rio e participar de iniciativas de limpeza e conscientização ambiental.',
        },
        {
          question: '4 - O Rio Paraíba do Sul atravessa quais estados brasileiros?',
          options: ['Rio Grande do Sul, Santa Catarina e Pernambuco', 'São Paulo, Paraná e Bahia', 'Rio de Janeiro, Minas Gerais e São Paulo'],
          correctAnswer: 'Rio de Janeiro, Minas Gerais e São Paulo',
        },
        {
          question: '5 - Qual é a função principal do Rio Paraíba do Sul?',
          options: ['Irrigação de plantações.', 'Transporte de mercadorias.', 'Abastecimento de água.'],
          correctAnswer: 'Abastecimento de água.',
        },
      ],
    },
    {
      level: 'Nível 2',
      questions: [
        {
          question: '1 - O que é um Comitê de Bacia Hidrográfica e qual é o seu papel em relação ao Rio Paraíba do Sul?',
          options: ['É uma espécie de barco que navega pelo rio para monitorar a poluição.', 'É uma organização responsável por fiscalizar e tomar decisões sobre a gestão dos recursos hídricos da bacia.', 'É um grupo de pescadores que se reúne para discutir técnicas de pesca no Rio Paraíba do Sul.'],
          correctAnswer: 'É uma organização responsável por fiscalizar e tomar decisões sobre a gestão dos recursos hídricos da bacia.',
        },
        {
          question: '2 - Quais são os principais parâmetros utilizados para avaliar a qualidade da água do Rio Paraíba do Sul?',
          options: ['A qualidade da água é determinada apenas pela sua aparência e cheiro.', 'pH, oxigênio dissolvido, turbidez, presença de metais pesados e coliformes fecais.', 'A temperatura ambiente na região onde o rio passa.'],
          correctAnswer: 'pH, oxigênio dissolvido, turbidez, presença de metais pesados e coliformes fecais.',
        },
        {
          question: '3 - Quais são as principais fontes de poluição que contribuem para a degradação da água do Rio Paraíba do Sul?',
          options: ['Poluição industrial, esgoto doméstico não tratado, agrotóxicos utilizados na agricultura e descarte inadequado de resíduos sólidos.', 'A poluição da água do rio é causada exclusivamente por fatores naturais.', 'O Rio Paraíba do Sul não possui problema com poluição, pois é um dos rios mais limpos Brasil.'],
          correctAnswer: 'Poluição industrial, esgoto doméstico não tratado, agrotóxicos utilizados na agricultura e descarte inadequado de resíduos sólidos.',
        },
        {
          question: '4 - Quais são as consequências da contaminação da água do Rio Paraíba do Sul para o ecossistema e para as comunidades que dependem dele?',
          options: ['A contaminação da água não afeta o ecossistema nem as comunidades que dependem do rio.', 'Aumento da disponibilidade de peixes e outros recursos aquáticos.', 'Risco de doenças, escassez de água potável e impactos na agricultura.'],
          correctAnswer: 'Risco de doenças, escassez de água potável e impactos na agricultura.',
        },
        {
          question: '5 - Qual é a localização do nascimento e da foz do Rio Paraíba do Sul?',
          options: ['Nasce na Serra da Bocaina, em São Paulo, e desagua no município de São João da Barra, no estado do Rio de Janeiro', 'Nasce na cidade de São Paulo e desagua no Oceano Atlântico, próximo ao estado Rio de Janeiro.', 'Nasce na Serra do Mar, no Rio de Janeiro e desagua no Oceano Atlântico, próximo ao estado do Espirito Santo.'],
          correctAnswer: 'Nasce na Serra da Bocaina, em São Paulo, e desagua no município de São João da Barra, no estado do Rio de Janeiro',
        },
      ],
    },
  ];

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleSelectLevel = (level) => {
    const selectedLevelData = levels.find((item) => item.level === level);
    if (selectedLevelData) {
      setSelectedLevel(selectedLevelData);
      setCurrentQuestion(0);
      setScore(0);
      setQuizCompleted(false);
    }
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === selectedLevel.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion === selectedLevel.questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizStarted(false);
    setQuizCompleted(false);
    setSelectedLevel(null);
  };

  return (
    
    <ImageBackground source={background} style={styles.backgroundImage}>
  <View style={styles.container}>
    <Image source={require('./image/Logo.png')} style={styles.image} />

    {!quizStarted && !quizCompleted && !selectedLevel && (
      <TouchableOpacity style={styles.buttonStart} onPress={handleStartQuiz}>
        <Text style={styles.buttonText}>Começar Quiz</Text>
      </TouchableOpacity>
    )}

    {quizStarted && !quizCompleted && !selectedLevel && (
      <View style={styles.levelContainer}>
        <Text style={styles.levelSelectionText}>Selecione o Nível:</Text>
        {levels.map((level) => (
          <TouchableOpacity
            key={level.level}
            style={styles.levelButton}
            onPress={() => handleSelectLevel(level.level)}
          >
            <Text style={styles.levelButtonText}>{level.level}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )}

    {quizStarted && !quizCompleted && selectedLevel && (
      <View style={styles.questionContainer}>
        <View style={styles.questionBackground}>
          <Text style={styles.questionText}>
            {selectedLevel.questions[currentQuestion].question}
          </Text>
        </View>
        <View style={styles.optionsBackground}>
          {selectedLevel.questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(option)}
            >
              <Text style={styles.optionButtonText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <StatusBar style="auto" />
      </View>
    )}

      {quizCompleted && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>Quiz completo!</Text>
              <Text style={styles.resultText}>{selectedLevel.level}</Text>
              <Text style={styles.resultText}>Pontuação: {score}/{selectedLevel.questions.length}</Text>
              <TouchableOpacity style={styles.button} onPress={handleRestartQuiz}>
                <Text style={styles.buttonText}>Reiniciar Quiz</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ImageBackground>
);
  
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonStart: {
    backgroundColor: '#5CA0E6',
    padding: 30,
    borderRadius: 8,
    marginBottom: 250,
    paddingHorizontal: 30,  
    marginVertical: 10,  
    
  },
  button: {
    backgroundColor: '#F66E6E',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  levelContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 5,
  },
  levelSelectionText: {
    fontSize: 18,
    marginBottom: 45,
  },
  levelButton: {
    backgroundColor: '#90CAF9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  levelButtonText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  questionContainer: {
    alignItems: 'center',
  },
  questionBackground: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  questionText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  optionsBackground: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
  optionButton: {
    backgroundColor: '#E6EAEF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  optionButtonText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  resultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 60,
    backgroundColor: 'white',
    padding: 35,
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  }
});