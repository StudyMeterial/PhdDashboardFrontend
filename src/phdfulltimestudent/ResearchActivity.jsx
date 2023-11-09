import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const ResearchActivity = () => {
  const [firstName, setFirstName] = useState('');
 
  const [article, setArticle] = useState('');
  const [savedArticles, setSavedArticles] = useState([]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleArticleChange = (e) => {
    setArticle(e.target.value);
  };

  const saveArticle = () => {
    const newArticle = {
      firstName: firstName,
     
      content: article,
    };

    axios.post('http://localhost:8080/api/articles/save', newArticle)
      .then(response => {
        // Update the state with the new article returned from the backend
        setSavedArticles([...savedArticles, response.data]);

        // Clear the input fields after saving the article
        setFirstName('');
       
        setArticle('');
        
      })
      .catch(error => {
        console.error('Error saving article:', error);
      });
  };

  useEffect(() => {
    // Fetch saved articles from the backend when the component mounts
    axios.get('http://localhost:8080/api/articles/all')
      .then(response => {
        // Update the state with fetched articles
        console.log('Fetched Articles:', response.data); 
        setSavedArticles(response.data);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </Form.Group>

           

            <Form.Group controlId="article">
              <Form.Label>Write your article</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Start typing your article here..."
                value={article}
                onChange={handleArticleChange}
              />
            </Form.Group>

            <Button variant="primary" onClick={saveArticle}>
              Save Article
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h2>Saved Articles</h2>
          {savedArticles.map((article, index) => (
            <div key={index} className="mb-4 p-3 border rounded">
              <h3>{article.firstName}</h3>
              
              <p>{article.content}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ResearchActivity;
