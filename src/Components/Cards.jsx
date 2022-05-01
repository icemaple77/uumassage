function Cards(){
    return (
             <Col>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src={card1} />
              <Card.Body>
                <Card.Title>Services</Card.Title>
                <Card.Text>
                  We offer a wide range of services to your satisfaction.
                </Card.Text>
                <Button variant="dark">Services</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src={card2} />
              <Card.Body>
                <Card.Title>Price</Card.Title>
                <Card.Text>
                  We offer a wide range of services to your satisfaction.
                </Card.Text>
                <Button variant="dark">Price</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src={card3} />
              <Card.Body>
                <Card.Title>Our Team</Card.Title>
                <Card.Text>
                  We offer a wide range of services to your satisfaction.
                </Card.Text>
                <Button variant="dark">Our Team</Button>
              </Card.Body>
            </Card>
          </Col>
    )
}