import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import useStyles from './styles';
import cx from 'clsx';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';

import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { getAllOrders, ShippingAOrder } from '../actions/supplierActions';

// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export const Cardd = function Cardd({ order }) {
    const [flip, setFlip] = useState(false);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    console.log(order);
    const styles = useStyles();
    const shadowStyles = useOverShadowStyles();

    const [UIDPass, setUIDPass] = useState("")

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const handleClose = () => setOpen(false);
    const handleClose_withConfirm = (order) => {

        if (UIDPass != "supplier") {
            // console.log(currentAdmin[0].password," vs You vs ",UIDPass);
            toast.error("Suppliers's Credential Doesn't Match",
                { position: toast.POSITION.TOP_CENTER, autoClose: 3000 })
            setUIDPass("")
            setShow(false);
            return;
        }
        console.log('Accpeted' + order._id);
        dispatch(ShippingAOrder({ orderid: order._id }))
        toast.success("Product Supplied for OrderID- " + order._id,
            { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 })
        setUIDPass("")
        setShow(false);

    }

    const handleShow = () => setShow(true);

    return (
        <Card className={cx(styles.root, shadowStyles.root)}>
            <CardContent>
                <TextInfoContent
                    // classes={contentStyles}
                    overline={order.transactionId}
                    heading={order.transactionId}
                />
                {order.isDelivered === 0 &&

                    <div>
                        <Button onClick={handleClickOpen('paper')}>Accept</Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">Order Details</DialogTitle>
                            <DialogContent dividers={scroll === 'paper'}>
                                <DialogContentText
                                    id="scroll-dialog-description"
                                    ref={descriptionElementRef}
                                    tabIndex={-1}
                                >
                                    {/* {[...new Array(50)]
                                        .map(
                                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                                        )
                                        .join('\n')} */}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}>Subscribe</Button>
                            </DialogActions>
                        </Dialog>
                    </div>

                }
                {
                    order.isDelivered === 2 &&
                    <div className='fixarea'>
                        <i class="far fa-check-circle"></i>
                        <p id="fixit">Supplied</p>
                    </div>
                }

            </CardContent>
        </Card>
    );
}

export default Cardd;