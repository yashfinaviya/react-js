import { Accordion, Container, Row } from "react-bootstrap";

const Faq = () => {

    const faqs = [
        {
            question: 'What Facilities Does Your Hotel Have?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.',
        },
        {
            question: 'How Do I Book A Room For My Vacation?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.',
        },
        {
            question: 'How We are best among others?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.',
        },
        {
            question: 'Is There Any Fitness Center In Your Hotel?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.',
        },
        {
            question: 'What Type Of Room Service Do You Offer?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.',
        },
        {
            question: 'What Facilities Does Your Hotel Have?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.',
        },
        {
            question: 'How Do I Book A Room For My Vacation?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.',
        },
        {
            question: 'Is There Any Fitness Center In Your Hotel?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.',
        },
        {
            question: 'There Any Fitness Is Center In Your Hotel?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.',
        },
    ];

    return (

        <>
            <Container>
                <div className="mt-5">
                    <Row>
                        <div className="col-lg-6">
                            <div className="faq-ing">
                                <img src="/public/About.jpg" alt="" className="rounded-2" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Accordion data-aos="fade-up" data-aos-duration="2000">
                                {faqs.map((faq, index) => (
                                    <Accordion.Item className="my-3" eventKey={index.toString()} key={index}>
                                        <Accordion.Header>{faq.question}</Accordion.Header>
                                        <Accordion.Body className="text-secondary">{faq.answer}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </Row>
                </div >
            </Container >
        </>
    )
}

export default Faq;