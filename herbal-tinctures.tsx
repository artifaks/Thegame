import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from 'lucide-react'

export default function Component() {
  const steps = [
    {
      title: "Choose Your Herbs",
      description: "Select high-quality, organic dried herbs. Popular choices include echinacea, chamomile, peppermint, or elderberry.",
      example: "For a immune-boosting tincture, try a combination of echinacea root, elderberries, and astragalus root."
    },
    {
      title: "Prepare Your Jar",
      description: "Clean and dry your glass jar thoroughly. Make sure it has a tight-fitting lid to prevent evaporation.",
      example: "A 16 oz mason jar works well for most tinctures. Sterilize it by boiling for 10 minutes."
    },
    {
      title: "Add Herbs to the Jar",
      description: "Fill the jar about 1/3 to 1/2 full with your chosen dried herbs. Don't pack them too tightly; they need room to expand.",
      example: "For a single herb tincture, use about 1 cup of dried herb per pint (16 oz) of alcohol."
    },
    {
      title: "Pour in the Alcohol",
      description: "Cover the herbs completely with your chosen alcohol. The liquid should be about 2-3 inches above the herbs.",
      example: "80-proof (40% alcohol) vodka is a good all-purpose choice. For roots and barks, consider using 100-proof (50% alcohol) vodka."
    },
    {
      title: "Seal and Store",
      description: "Close the jar tightly and label it with the herb name and date. Store in a cool, dark place.",
      example: "A kitchen cupboard away from heat sources is ideal. Avoid direct sunlight."
    },
    {
      title: "Shake Daily",
      description: "Shake the jar gently once a day for 4-6 weeks. This helps to extract the herbs' properties into the alcohol.",
      example: "Set a daily reminder on your phone to ensure you don't forget this important step."
    },
    {
      title: "Strain the Tincture",
      description: "After 4-6 weeks, strain the liquid through cheesecloth or a fine mesh strainer into a clean bowl.",
      example: "You can also use a potato ricer lined with cheesecloth for easy straining."
    },
    {
      title: "Bottle Your Tincture",
      description: "Use a funnel to pour the strained tincture into dark glass bottles. Label each bottle with the herb name and date.",
      example: "Amber or cobalt blue dropper bottles work well and come in various sizes (1 oz, 2 oz, 4 oz)."
    },
    {
      title: "Store and Use",
      description: "Store your tinctures in a cool, dark place. They can last for several years. Use as directed or consult with a healthcare professional for dosage.",
      example: "A typical dose is 30-60 drops (1-2 ml) taken 2-3 times daily, but this can vary based on the herb and individual needs."
    }
  ]

  const commonHerbs = [
    { name: "Echinacea", uses: "Immune support, cold and flu prevention" },
    { name: "Chamomile", uses: "Relaxation, digestive aid, sleep support" },
    { name: "Peppermint", uses: "Digestive support, headache relief, breath freshener" },
    { name: "Elderberry", uses: "Immune support, cold and flu relief, antioxidant properties" },
    { name: "Valerian Root", uses: "Sleep aid, anxiety relief, stress reduction" },
    { name: "Ginger", uses: "Digestive aid, nausea relief, anti-inflammatory, circulation support" },
    { name: "Lemon Balm", uses: "Stress relief, cognitive function support, sleep aid" },
    { name: "St. John's Wort", uses: "Mood support, mild depression relief, nerve pain relief" },
    { name: "Dandelion", uses: "Liver support, diuretic, digestive aid" },
    { name: "Milk Thistle", uses: "Liver support, antioxidant, potential cholesterol reduction" },
    { name: "Ashwagandha", uses: "Stress relief, energy boost, cognitive function support" },
    { name: "Turmeric", uses: "Anti-inflammatory, joint health, antioxidant properties" },
    { name: "Lavender", uses: "Relaxation, sleep aid, skin health" },
    { name: "Passionflower", uses: "Anxiety relief, sleep aid, pain relief" },
    { name: "Hawthorn", uses: "Heart health, blood pressure support, antioxidant properties" },
    { name: "Nettle", uses: "Allergy relief, nutrient boost, potential prostate health" }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl bg-[#F5E6BE]">
      <h1 className="text-4xl font-bold mb-6 text-center">Making Herbal Tinctures: A Comprehensive Guide</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Herbal tinctures are concentrated liquid extracts of herbs that offer a convenient and effective way to consume the beneficial properties of plants. They are easy to make at home and can be a great addition to your natural health toolkit. This guide will walk you through the process of creating your own herbal tinctures, along with tips and examples to ensure success.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Materials Needed</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dried herbs of your choice (organic is preferred)</li>
            <li>High-proof alcohol (vodka, brandy, or grain alcohol)</li>
            <li>Clean glass jar with a tight-fitting lid (mason jars work well)</li>
            <li>Cheesecloth or fine mesh strainer</li>
            <li>Dark glass bottles for storing the finished tincture (amber or cobalt blue)</li>
            <li>Labels and permanent marker</li>
            <li>Funnel (optional, but helpful)</li>
            <li>Measuring cups and spoons</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Step-by-Step Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <h3 className="font-semibold text-lg mb-2">{index + 1}. {step.title}</h3>
                <p className="text-muted-foreground mb-2">{step.description}</p>
                <p className="text-sm italic">Example: {step.example}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Common Herbs for Tinctures</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list" className="w-full">
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
            </TabsList>
            <TabsContent value="list">
              <ul className="space-y-2">
                {commonHerbs.map((herb, index) => (
                  <li key={index}>
                    <strong>{herb.name}:</strong> {herb.uses}
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonHerbs.map((herb, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{herb.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{herb.uses}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Safety First</AlertTitle>
        <AlertDescription>
          Always research herbs thoroughly before use. Some herbs may interact with medications or have contraindications for certain health conditions. When in doubt, consult with a qualified herbalist or healthcare professional.
        </AlertDescription>
      </Alert>

      <Separator className="my-8" />

      <Card className="mt-8 mb-4">
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Disclaimer</h2>
          <p className="text-sm text-muted-foreground">
            The information provided in this guide is for educational purposes only and is not intended as medical advice. Herbal remedies can interact with medications and may not be suitable for everyone. Always consult with a qualified healthcare professional before starting any new herbal regimen, especially if you have pre-existing health conditions, are pregnant, or are taking medications.
          </p>
        </CardContent>
      </Card>

      <footer className="text-center text-sm text-muted-foreground">
        <p>Always consult with a healthcare professional before using herbal remedies, especially if you have any medical conditions or are taking medications.</p>
        <p className="mt-2">Visit <a href="https://wellnessisgolden.com" className="text-primary hover:underline">wellnessisgolden.com</a> for more wellness resources and in-depth guides on herbal remedies.</p>
      </footer>
    </div>
  )
}