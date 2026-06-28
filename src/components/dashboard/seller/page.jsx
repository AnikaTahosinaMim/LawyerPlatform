"use client";

import { addProducts } from "@/lib/api/products";
import { imageUploaded } from "@/lib/imageUpload";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function SellerProductsFrom() {
  const onSUbmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const image = await imageUploaded(data.image);
    console.log(image);
    const products = {
      ...data,
      image:image.url
    }
    const result = await addProducts(products)
    console.log(result)


  };
  return (
    <Modal>
      <Button variant="secondary">Click here for products information</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSUbmit} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Products Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="Description"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Description</Label>
                    <Input placeholder="Enter Description" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="price"
                    type="number"
                    variant="secondary"
                  >
                    <Label>Price</Label>
                    <Input placeholder="Enter your products price" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="Quentity"
                    variant="secondary"
                  >
                    <Label>Quentity</Label>
                    <Input placeholder="Quentity" />
                  </TextField>

                  <TextField className="w-full" type="file" variant="secondary">
                    <Label>Image</Label>
                    <input
                      type="file"
                      name="image"
                      placeholder="Enter your prodcuts image"
                    />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Submit
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
