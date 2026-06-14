
import React, { useState } from 'react';
import { ArrowLeft, Palette, Sparkles, X } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Figma, Layout, Image as LucideImage } from 'lucide-react';

const Illustrations = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const illustrations = [
    {
      id: 1,
      title: "Digital Art Concepts",
      description: "Conceptual illustrations for digital products and applications",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Character Design",
      description: "Custom character illustrations for brands and games",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "UI Illustrations",
      description: "Custom illustrations for websites and mobile applications",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "3D Visualizations",
      description: "Three-dimensional illustrations and visualizations",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Editorial Illustrations",
      description: "Illustrations for articles, magazines and publications",
      image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Concept Art",
      description: "Visual development for games, films and animations",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleOpenDialog = (index: number) => {
    setSelectedImage(index);
    setDialogOpen(true);
  };

  const uiProjects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      description: "Complete mobile app design for an e-commerce platform with modern UI/UX",
      tool: "Figma",
      projectUrl: "https://www.figma.com/file/your-figma-file-id/ecommerce-mobile-app",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Data visualization dashboard with interactive charts and metrics",
      tool: "Figma",
      projectUrl: "https://www.figma.com/file/your-figma-file-id/dashboard-analytics",
      images: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Modern social media interface with dark mode and custom animations",
      tool: "Canva",
      projectUrl: "https://www.canva.com/design/your-canva-design-id/social-media-app",
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "Responsive website design for a fine dining restaurant",
      tool: "Figma",
      projectUrl: "https://www.figma.com/file/your-figma-file-id/restaurant-website",
      images: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 5,
      title: "Fitness App UI",
      description: "Health and fitness tracking app with motivational design elements",
      tool: "Canva",
      projectUrl: "https://www.canva.com/design/your-canva-design-id/fitness-app-ui",
      images: [
        "https://images.unsplash.com/photo-1555421689-3f034debb7a6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1547658718-1c8c5f8173ac?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 6,
      title: "Banking App Design",
      description: "Secure and user-friendly banking application interface",
      tool: "Figma",
      projectUrl: "https://www.figma.com/file/your-figma-file-id/banking-app-design",
      images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const [selectedUIProject, setSelectedUIProject] = useState<number | null>(null);
  const [uiDialogOpen, setUiDialogOpen] = useState(false);

  const getToolIcon = (tool: string) => {
    switch (tool.toLowerCase()) {
      case 'figma':
        return <Figma className="w-4 h-4" />;
      case 'canva':
        return <Layout className="w-4 h-4" />;
      default:
        return <Palette className="w-4 h-4" />;
    }
  };

  const handleOpenUiDialog = (index: number) => {
    setSelectedUIProject(index);
    setUiDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-cosmic-dark text-cosmic-text">
      {/* Header */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <a href="/" className="flex items-center text-cosmic-accent hover:text-cosmic-highlight transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Portfolio</span>
          </a>
        </div>
      </div>

      {/* Figma & Canva UI Projects */}
      <div className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-500">Creative UI Design Gallery</h2>
        <p className="text-center text-cosmic-text/70 mb-8">Explore a collection of UI designs created with Figma and Canva, showcasing modern web and mobile interfaces.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {uiProjects.map((item, index) => (
            <Card 
              key={item.id}
              className="cosmic-card border-none h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <CardContent className="flex flex-col p-5 h-full">
                <div className="relative aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg bg-cosmic-deep/80 flex items-center justify-center">
                  <img 
                    src={item.images[0]} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                    onClick={() => handleOpenUiDialog(index)}
                  />
                  <div className="absolute top-2 right-2 bg-cosmic-dark/80 px-2 py-1 rounded-full flex items-center gap-1">
                    {getToolIcon(item.tool)}
                    <span className="text-xs text-cosmic-text">{item.tool}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-cosmic-text">{item.title}</h3>
                <p className="text-cosmic-text/70 text-sm mb-4 flex-grow">{item.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  {item.projectUrl && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenUiDialog(index);
                      }}
                      className="text-purple-400 hover:text-purple-300 transition-colors text-sm flex items-center gap-1 px-2 py-1 rounded-md hover:bg-purple-400/10"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Open Project</span>
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dialog for UI Project Preview */}
        <Dialog open={uiDialogOpen} onOpenChange={setUiDialogOpen}>
          <DialogContent className="sm:max-w-4xl bg-cosmic-dark border-cosmic-accent/30">
            <DialogHeader>
              <DialogTitle className="text-cosmic-text flex items-center gap-2">
                {selectedUIProject !== null && (
                  <>
                    {getToolIcon(uiProjects[selectedUIProject].tool)}
                    {uiProjects[selectedUIProject].title}
                  </>
                )}
              </DialogTitle>
              <DialogDescription className="text-cosmic-text/70">
                {selectedUIProject !== null ? uiProjects[selectedUIProject].description : ""}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 rounded-lg overflow-hidden">
              {selectedUIProject !== null && uiProjects[selectedUIProject].images && uiProjects[selectedUIProject].images.length > 0 && (
                <Carousel className="w-full" opts={{ loop: true }}>
                  <CarouselContent>
                    {uiProjects[selectedUIProject].images.map((imgSrc, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="relative aspect-video">
                          <img
                            src={imgSrc}
                            alt={`${uiProjects[selectedUIProject].title} - Image ${imgIndex + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {uiProjects[selectedUIProject].images.length > 1 && (
                    <>
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                    </>
                  )}
                </Carousel>
              )}
            </div>
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => selectedUIProject !== null && selectedUIProject > 0 && setSelectedUIProject(selectedUIProject - 1)}
                disabled={selectedUIProject === 0}
                className="border-cosmic-accent/30 hover:bg-cosmic-accent/10 text-cosmic-text"
              >
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() => selectedUIProject !== null && selectedUIProject < uiProjects.length - 1 && setSelectedUIProject(selectedUIProject + 1)}
                disabled={selectedUIProject === uiProjects.length - 1}
                className="border-cosmic-accent/30 hover:bg-cosmic-accent/10 text-cosmic-text"
              >
                Next
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Illustrations;
