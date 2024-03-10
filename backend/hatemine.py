import pandas as pd
import numpy as np
import re
import nltk
from nltk.corpus import stopwords
from nltk.stem import SnowballStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.svm import SVC
from sklearn.metrics import classification_report
import joblib

data = pd.read_csv("./dataset/output_deduplicated.csv")

stemmer = SnowballStemmer("english")
stopword = set(stopwords.words('english'))

def preprocess_text(text):
    text = re.sub(r'[^\w\s]', '', text.lower())  
    tokens = nltk.word_tokenize(text)
    tokens = [stemmer.stem(token) for token in tokens if token not in stopword]  
    return ' '.join(tokens)

data['processed_message'] = data['message'].apply(preprocess_text)

X_train, X_test, y_train, y_test = train_test_split(data['processed_message'], data['isMisogynistic'], test_size=0.2, random_state=42)

pipeline = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('clf', SVC(kernel='linear'))
])

pipeline.fit(X_train, y_train)
y_pred = pipeline.predict(X_test)
def predict(input_message):
    input_message_processed = preprocess_text(input_message)
    prediction = pipeline.predict([input_message_processed])
    if prediction[False]:
        return False
    else:
        return True

