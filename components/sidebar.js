import Link from "next/link";
import { Container, Row, Col, OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import Router from 'next/router'

const Sidebar = () => {

const handleExit = () =>{
  Router.push("/")
}
  function eventHandler() {
    if ($('.colSideMenu').width() >= 65) {
      $('.colSideMenu').css('width', '65px');
      $('.btnProfile').css('width', '45px');
      $('.btnProfile > span').css('display', 'none');
      $('.btnMembership').css('width', '45px');
      $('.btnMembership > span').css('display', 'none');
      $('.btnPayment').css('width', '45px');
      $('.btnPayment > span').css('display', 'none');
      $('.btnServices').css('width', '45px');
      $('.btnServices > span').css('display', 'none');
      $('.btnExit').css('width', '45px');
      $('.btnExit > span').css('display', 'none');
      $('.btnRight').css('left', '50px');
      $('.btnRight').css('transform', 'none');
      $('.btnDashboard').css('left', '50px');
      $('.btnDashboard').css('width', '45px');
      $('.btnDashboard > span').css('display', 'none');
      $('.btnNotes').css('left', '50px');
      $('.btnNotes').css('width', '45px');
      $('.btnNotes > span').css('display', 'none');
      $('.imgLogoLifeline').css('margin-left','auto');
    }
    else {
      $('.colSideMenu').css('width', '175px');
      $('.colSideMenu').css('box-shadow', '0 2px 20px -6px #cc292f !important');
      $('.btnProfile').css('width', '150px');
      $('.btnProfile > span').css('display', 'inline');
      $('.btnMembership > span').css('display', 'inline');
      $('.btnMembership').css('width', '150px');
      $('.btnPayment > span').css('display', 'inline');
      $('.btnPayment').css('width', '150px');
      $('.btnServices > span').css('display', 'inline');
      $('.btnServices').css('width', '150px');
      $('.btnExit > span').css('display', 'inline');
      $('.btnExit').css('width', '150px');
      $('.btnRight').css('left', '160px');
      $('.btnRight').css('transform', 'rotate(180deg)');
      $('.btnDashboard').css('width', '150px');
      $('.btnDashboard > span').css('display', 'inline');
      $('.btnNotes').css('width', '150px');
      $('.btnNotes > span').css('display', 'inline');
      $('.imgLogoLifeline').css('margin-left','55px');
    }
  }

const handleBackToHome = () => {
  Router.push("/")
}
  return (
    <Container fluid={true} className="h100 colSideMenu float-right">
      <Row className="h100 align-items-center rowSide justify-content-center">
        <Col lg={12} className="text-center" style={{ position: "relative" }}>
          <img src="../Image/logo.png" className="imgLogoLifeline" onClick={handleBackToHome}></img>

          <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Dashboard</Tooltip>}>
            <Link href="/dashboard">
              <button className="btn btnDashboard">
                <img src="../Image/home.png" className="imgLogo imgUser" />
                <span>Dashboard</span>
              </button>
            </Link>
          </OverlayTrigger>

          <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Profile</Tooltip>}>
            <Link href="/dashboard/profile">
              <button className="btn btnProfile">
                <img src="../Image/user.png" className="imgLogo imgUser" />
                <span>Profile</span>
              </button>
            </Link>
          </OverlayTrigger>

          <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Membership</Tooltip>}>
            <Link href="/dashboard/membership">
              <button className="btn btnMembership">
                <img src="../Image/membership.png" className="imgLogo" />
                <span>Membership</span>
              </button>
            </Link>
          </OverlayTrigger>

          <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Payment</Tooltip>}>
            <Link href="/dashboard/payments">
              <button className="btn btnPayment">
                <img src="../Image/payment.png" className="imgLogo" />
                <span>Payment</span>
              </button>
            </Link>
          </OverlayTrigger>

          <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Services</Tooltip>}>
            <Link href="/dashboard/services">
              <button className="btn btnServices">
                <img src="../Image/services.png" className="imgLogo" />
                <span>Services</span>
              </button>
            </Link>
          </OverlayTrigger>

          <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Notes</Tooltip>}>
            <Link href="/notes">
              <button className="btn btnNotes">
                <img src="../Image/notepad.png" className="imgLogo" />
                <span>Notes</span>
              </button>
            </Link>
          </OverlayTrigger>

          <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">Exit</Tooltip>}>
            <button className="btn btnExit" onClick={handleExit}>
              <img src="../Image/logout.png" className="imgLogo" />
              <span>Exit</span>
            </button>
          </OverlayTrigger>

          <button className="btn btnRight" onClick = {eventHandler}>
            <img src="../Image/next.png" className="imgLogo imgRight" />
            <span>Exit</span>
          </button>
        </Col>
      </Row>
    </Container>
  )
};

export default Sidebar;