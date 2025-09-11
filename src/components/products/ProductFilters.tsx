'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Search } from 'lucide-react';

interface ProductFiltersProps {
  categories: string[];
  materials: string[];
  filters: { categories: string[]; materials: string[] };
  setFilters: React.Dispatch<React.SetStateAction<{ categories: string[]; materials: string[] }>>;
  sort: string;
  setSort: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function ProductFilters({
  categories,
  materials,
  filters,
  setFilters,
  sort,
  setSort,
  searchQuery,
  setSearchQuery,
}: ProductFiltersProps) {

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleMaterialChange = (material: string) => {
    setFilters(prev => ({
      ...prev,
      materials: prev.materials.includes(material)
        ? prev.materials.filter(m => m !== material)
        : [...prev.materials, material],
    }));
  };

  return (
    <Card className="sticky top-20">
        <CardHeader>
            <CardTitle>Filter & Sort</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                />
            </div>
            
            <div>
                <Label>Sort by</Label>
                <Select value={sort} onValueChange={setSort}>
                    <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="rating-desc">Highest Rating</SelectItem>
                    <SelectItem value="name-asc">Name: A to Z</SelectItem>
                    <SelectItem value="name-desc">Name: Z to A</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Accordion type="multiple" defaultValue={['category', 'material']} className="w-full">
                <AccordionItem value="category">
                    <AccordionTrigger className="text-base">Category</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                    {categories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                            id={`cat-${category}`}
                            checked={filters.categories.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                        />
                        <Label htmlFor={`cat-${category}`} className="font-normal">{category}</Label>
                        </div>
                    ))}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="material">
                    <AccordionTrigger className="text-base">Material</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                    {materials.map(material => (
                        <div key={material} className="flex items-center space-x-2">
                        <Checkbox
                            id={`mat-${material}`}
                            checked={filters.materials.includes(material)}
                            onCheckedChange={() => handleMaterialChange(material)}
                        />
                        <Label htmlFor={`mat-${material}`} className="font-normal">{material}</Label>
                        </div>
                    ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </CardContent>
    </Card>
  );
}
