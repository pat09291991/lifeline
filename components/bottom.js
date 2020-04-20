import Link from "next/link";
import { Container, Row, Col, OverlayTrigger } from "react-bootstrap";

const Bottom = () => (
    <Container fluid={true} className="colBottom">
        <Row className="text-center">
            <Col xs={2}>
                <Link href="/dashboard">
                    <img src="../../Image/home.png" className="imgLogo" />
                </Link>
            </Col>
            <Col xs={2}>
                <Link href="/dashboard/bookings">
                    <img src="../../Image/services.png" className="imgLogo" />
                </Link>
            </Col>
            <Col xs={4}>
                <Link href="/dashboard/profile">
                    <img src="../../Image/dp.jpeg" className="imgLogo imgProfileBottom" />
                </Link>
            </Col>
            <Col xs={2}>
                <Link href="/dashboard/membership">
                    <img src="../../Image/membership.png" className="imgLogo" />
                </Link>
            </Col>
            <Col xs={2}>
                <Link href="/dashboard/payments">
                    <img src="../../Image/payment.png" className="imgLogo" />
                </Link>
            </Col>
        </Row>
    </Container>
);

export default Bottom;