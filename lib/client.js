import sanityClient from "@sanity/client";
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "yy740o6w",
    dataset: 'production',
    apiVersion: '2022-08-30',
    useCdn: true,
    token: 
    "skza1UCXmHSqVcfZPQe8BrkyluWI3pPJH8F2M2lRmY9AVEWpvmSPOxTVDOmlXMQHomV4xZ8cSzQRrGgLcumLyCkfKYN4W9QSULv8sJGz1dbefBTnDGyNDal5z9E3AGuowtDiujOMFXmd3XTVscrGSXRFM7C65oILYDRxY6CXWbTk42vCzFzs"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)